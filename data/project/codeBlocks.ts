// app/data/project/codeBlocks.ts

// 프로젝트 내용 페이지에서 재사용할 코드/명령어 블록 타입
export type ProjectCodeBlock = {
  label: string
  language: 'bash' | 'python' | 'nginx' | 'text'
  content: string
}

// 카드별로 사용할 코드 블록들을 모아둔 데이터
export const projectCodeBlocks = {
  // 1. Next.js 포트폴리오 서비스 구성 (PM2)
  pm2: [
    {
      label: 'Next.js 포트폴리오 PM2 실행 · 자동 시작',
      language: 'bash',
      content: `cd ~/linux-portfolio

# pm2 설치
sudo npm install -g pm2

# Next.js 앱을 pm2로 실행
pm2 start npm --name "linux-portfolio" -- start

# 재부팅 후에도 자동으로 뜨도록
pm2 save
pm2 startup systemd   # 안내해주는 명령도 한 번 실행

# 상태 확인 및 내부 접속 테스트
pm2 status
curl http://localhost:3000`,
    },
  ] as ProjectCodeBlock[],

  // 2. Nginx 리버스 프록시 + HTTPS
  nginx: [
    {
      label: 'Nginx 사이트 설정 (/etc/nginx/sites-available/portfolio)',
      language: 'nginx',
      content: `server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/ssl/certs/selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/selfsigned.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`,
    },
    {
      label: 'HTTPS 인증서 생성 및 Nginx 적용 확인',
      language: 'bash',
      content: `# self-signed 인증서 생성
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
  -keyout /etc/ssl/private/selfsigned.key \\
  -out /etc/ssl/certs/selfsigned.crt

# 설정 문법·재시작·포트 확인
sudo nginx -t
sudo systemctl reload nginx
sudo ss -tulpn | grep nginx

# 브라우저에서 http/https 접속 테스트
# http://<SERVER_IP>
# https://<SERVER_IP> (경고 → 고급 → 계속 진행)`,
    },
  ] as ProjectCodeBlock[],

  // 3. UFW 방화벽 최소 권한 정책
  ufw: [
    {
      label: 'UFW 기본 정책 및 규칙 설정',
      language: 'bash',
      content: `# 기본 정책
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 필요한 포트 허용
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'   # 80, 443
sudo ufw allow 2222/tcp       # SSH를 2222로 변경 후 사용

# 방화벽 활성화 및 상태 확인
sudo ufw enable
sudo ufw status numbered

# 3000 포트는 규칙에 추가하지 않아 외부에서 직접 접속 불가
# (Nginx를 통해서만 접근 가능)`,
    },
  ] as ProjectCodeBlock[],

  // 4. SSH 보안 강화
  ssh: [
    {
      label: 'sshd_config 핵심 설정 (/etc/ssh/sshd_config)',
      language: 'text',
      content: `Port 2222
PermitRootLogin no
PasswordAuthentication yes`,
    },
    {
      label: 'systemd socket 비활성화 및 ssh 서비스 재시작',
      language: 'bash',
      content: `# ssh.socket이 22번 포트를 계속 리스닝하던 문제 해결
sudo systemctl stop ssh.socket
sudo systemctl disable ssh.socket

# ssh 서비스만 사용
sudo systemctl enable ssh
sudo systemctl restart ssh

# 리스닝 포트 확인
sudo ss -tulpn | grep ssh

# Windows에서 접속 예시
ssh -p 2222 kimkayun@<SERVER_IP>`,
    },
  ] as ProjectCodeBlock[],

  // 5. 로그 기반 IDS (탐지 및 자동 차단)
  ids: [
    {
      label: 'log_analyzer.py (Nginx access.log 분석)',
      language: 'python',
      content: `from collections import Counter
import datetime

LOG_PATH = "/var/log/nginx/access.log"


def parse_log_line(line: str):
    parts = line.split()
    if len(parts) < 9:
        return None

    ip = parts[0]
    time_str = parts[3].lstrip('[')  # [13/Nov/2025:21:00:00
    status = parts[8]

    try:
        dt = datetime.datetime.strptime(time_str, "%d/%b/%Y:%H:%M:%S")
    except ValueError:
        return None

    return ip, dt, status


def main():
    with open(LOG_PATH, "r") as f:
        lines = f.readlines()

    now = datetime.datetime.now()
    window_minutes = 5
    threshold = 100

    ip_counter = Counter()
    ip_404_counter = Counter()

    for line in lines:
        parsed = parse_log_line(line)
        if not parsed:
            continue
        ip, dt, status = parsed

        if (now - dt).total_seconds() <= window_minutes * 60:
            ip_counter[ip] += 1
            if status == "404":
                ip_404_counter[ip] += 1

    print("=== 최근 5분간 요청 수 상위 IP ===")
    for ip, cnt in ip_counter.most_common():
        print(ip, cnt)

    print("\\n=== 404 많이 발생시킨 IP ===")
    for ip, cnt in ip_404_counter.most_common():
        print(ip, cnt)

    print("\\n=== 차단 후보 IP (요청 수 기준) ===")
    for ip, cnt in ip_counter.items():
        if cnt >= threshold:
            print(ip, cnt)


if __name__ == "__main__":
    main()`,
    },
    {
      label: 'block_bad_ips.py (UFW 자동 차단)',
      language: 'python',
      content: `import subprocess
from collections import Counter
import datetime

LOG_PATH = "/var/log/nginx/access.log"
THRESHOLD = 100
WINDOW_MINUTES = 5


def parse_log_line(line: str):
    parts = line.split()
    if len(parts) < 9:
        return None

    ip = parts[0]
    time_str = parts[3].lstrip("[")
    try:
        dt = datetime.datetime.strptime(time_str, "%d/%b/%Y:%H:%M:%S")
    except ValueError:
        return None
    return ip, dt


def get_blocked_ips():
    result = subprocess.run(
        ["sudo", "ufw", "status"],
        capture_output=True,
        text=True,
    )
    blocked = set()
    for line in result.stdout.splitlines():
        if "DENY IN" in line:
            blocked.add(line.split()[0])
    return blocked


def main():
    now = datetime.datetime.now()
    counter = Counter()

    with open(LOG_PATH, "r") as f:
        lines = f.readlines()

    for line in lines:
        parsed = parse_log_line(line)
        if not parsed:
            continue
        ip, dt = parsed
        if (now - dt).total_seconds() <= WINDOW_MINUTES * 60:
            counter[ip] += 1

    blocked = get_blocked_ips()

    for ip, cnt in counter.items():
        if cnt >= THRESHOLD and ip not in blocked:
            print(f"[+] 차단 실행: {ip} ({cnt}회 요청)")
            subprocess.run(["sudo", "ufw", "deny", "from", ip], check=False)


if __name__ == "__main__":
    main()`,
    },
    {
      label: 'Crontab – 5분마다 IDS 자동 실행',
      language: 'bash',
      content: `# crontab -e 에 추가
*/5 * * * * /usr/bin/python3 /home/kimkayun/log-ids/block_bad_ips.py >> /home/kimkayun/log-ids/ids.log 2>&1`,
    },
  ] as ProjectCodeBlock[],

  // 6. 로그 시각화 · 그래프 분석
  graphs: [
    {
      label: 'matplotlib 설치',
      language: 'bash',
      content: `sudo apt update
sudo apt install -y python3-matplotlib`,
    },
    {
      label: 'log_graphs.py (Nginx 로그 시각화)',
      language: 'python',
      content: `from collections import Counter, defaultdict
import matplotlib.pyplot as plt
import datetime

LOG_PATH = "/var/log/nginx/access.log"


def parse_log_line(line: str):
    parts = line.split()
    if len(parts) < 9:
        return None, None, None, None

    ip = parts[0]
    time_str = parts[3].lstrip("[")
    try:
        dt = datetime.datetime.strptime(time_str, "%d/%b/%Y:%H:%M:%S")
    except ValueError:
        return None, None, None, None

    status = parts[8]
    method = parts[5].strip('"')  # "GET, "POST 등
    return ip, dt, status, method


def load_recent_logs(window_minutes: int = 60 * 24):
    now = datetime.datetime.now()
    records = []

    with open(LOG_PATH, "r") as f:
        for line in f:
            ip, dt, status, method = parse_log_line(line)
            if not ip or not dt:
                continue
            if (now - dt).total_seconds() <= window_minutes * 60:
                records.append((ip, dt, status, method))

    return records


def plot_top_ips(records, out_path: str = "top_ips.png"):
    counter = Counter(ip for ip, _, _, _ in records)
    top = counter.most_common(10)

    if not top:
        print("[Top IP] 최근 로그가 거의 없습니다.")
        return

    labels = [ip for ip, _ in top]
    counts = [cnt for _, cnt in top]

    plt.figure(figsize=(10, 5))
    plt.bar(labels, counts)
    plt.title("Top 10 IP by Request Count (최근 24시간)")
    plt.xlabel("IP 주소")
    plt.ylabel("요청 수")
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()
    plt.savefig(out_path)
    plt.close()
    print(f"[Top IP] {out_path} 생성 완료)")


def plot_status_codes(records, out_path: str = "status_codes.png"):
    counter = Counter(status for _, _, status, _ in records)

    if not counter:
        print("[Status] 최근 로그가 거의 없습니다.")
        return

    labels = list(counter.keys())
    counts = list(counter.values())

    plt.figure(figsize=(8, 5))
    plt.bar(labels, counts)
    plt.title("HTTP Status Code Distribution (최근 24시간)")
    plt.xlabel("Status Code")
    plt.ylabel("Count")
    plt.tight_layout()
    plt.savefig(out_path)
    plt.close()
    print(f"[Status] {out_path} 생성 완료)")


def plot_requests_by_hour(records, out_path: str = "requests_by_hour.png"):
    by_hour = defaultdict(int)
    for _, dt, _, _ in records:
        hour = dt.replace(minute=0, second=0, microsecond=0)
        by_hour[hour] += 1

    if not by_hour:
        print("[Hourly] 최근 로그가 거의 없습니다.")
        return

    hours = sorted(by_hour.keys())
    counts = [by_hour[h] for h in hours]

    plt.figure(figsize=(10, 5))
    plt.plot(hours, counts, marker="o")
    plt.title("Requests by Hour (최근 24시간)")
    plt.xlabel("시간")
    plt.ylabel("요청 수")
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()
    plt.savefig(out_path)
    plt.close()
    print(f"[Hourly] {out_path} 생성 완료)")


def main():
    records = load_recent_logs()
    print(f"총 {len(records)}개의 로그 레코드 로드")

    plot_top_ips(records)
    plot_status_codes(records)
    plot_requests_by_hour(records)


if __name__ == "__main__":
    main()`,
    },
  ] as ProjectCodeBlock[],
} as const
