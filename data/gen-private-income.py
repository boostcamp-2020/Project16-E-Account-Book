import sys
import random
import csv

# 수입 목록 리스트
급여 = ['월급','알바비']
용돈 = ['생활비','용돈']
금융수입 = ['주식이자']
사업수입 = ['계약금','사업수입']
기타수입 = ['부스트캠프장학금','생활지원금','카드캐시백','은행이자']

# 사용자 변경 변수 - 실행 전 원하는 값으로 설정해주세요.
ACCOUNTBOOK_ID = 13 # 데이터를 생성할  accountbook_id
PAYMENTS = [1,7,17] # user의 payment_id 목록
INCOME_NUMBER = 50 # 수입 생성 개수
INCOME_CATEGORY = [ # category_id / 최고 금액 / 최소 금액 / 목록 리스트
    [1, 1500000, 3000000, 급여],
    [2, 50000, 500000, 용돈],
    [3, 10000, 500000, 금융수입],
    [4, 300000, 1000000, 사업수입],
    [5, 1000, 100000, 기타수입],
]

# 오늘 날짜로 부터 생성할 데이터 범위 지정
BEFORE_DAY_NUM = 300 # 예시의 경우 300일 이전의 데이터까지 생성함


def getRandomData(list):
    return random.sample(list, 1)

def getRandomAmount(start, end):
    return int(random.randrange(start, end) / 10) * 10

def getRandomDate():
    import datetime
    days = random.randint(0, BEFORE_DAY_NUM)
    hours = random.randint(0, 24)
    mins = random.randint(0, 60)
    d = datetime.datetime.now() - datetime.timedelta(days=days, hours = hours, minutes = mins)
    return d.strftime("%Y-%m-%d %H:%M:%S")


def create_csv():
    f = open('private_income.csv', 'w', encoding='utf-8')
    wr = csv.writer(f)
    wr.writerow(['accountbook_id','category_id','date','title','amount'])
    # 수입 내역 생성
    for _ in range(INCOME_NUMBER):
        [transaction] = getRandomData(INCOME_CATEGORY)
        date = getRandomDate()
        [title] = getRandomData(transaction[3])
        amount = getRandomAmount(transaction[1],transaction[2])
        wr.writerow([ACCOUNTBOOK_ID, transaction[0],date,title,amount])

create_csv()
