import sys
import random
import csv

# 지출 목록 리스트
식사 = ['오뚜기','죠스떡볶이','권육회','불로만','그럼통닭','닭스토랑',
    '낙원타코','이모네칼국수','구뜰보쌈','어송스시','달인우동','미각',
    '고봉민김밥','미완성식당','둘중하나','경양카츠','BBQ','아롤도그']
카페간식 = ['이디야','스타벅스','투썸플레이스','굿커피']
술유흥 = ['셰프의 포차','김형건포차','숯불꼬치구이','서울곱창',
    '한신포차','삼구포차','동막골','작은술집']
생활마트 = ['롯데마트','하나로마트','농민마트','GS25','CU']
백화점패션 = ['겨울코트','니트','청바지','패딩','나이키','아디다스',
    '디스커버리','뉴발란스','ZARA','샤넬']
교통 = ['교통카드대금','출장시외버스','택시']
뷰티미용 = ['스킨로션','마스크팩','립밤']
의료건강 = ['건강보험료','마스크','감기약','병원']
금융보험 = ['핸드폰보험','자동차보험']
문화여가 = ['코인노래방','PC방','실내게임장','드로잉카페']
여행 = ['강원도 여행','충청도 여행','서울 여행']
기타 = ['축의금','기부','문구점','친구생일선물']

ACCOUNTBOOK_ID = 13 # 데이터를 생성할  accountbook_id
PAYMENTS = [1,7,17] # user의 payment_id 목록
EXPENDITURE_NUMBER = 500 # 지출 생성 개수
EXPENDITURE_CATEGORY = [ # category_id / 최고 금액 / 최소 금액 / 목록 리스트
    [6, 3000, 80000, 식사],
    [7, 4000, 30000, 카페간식],
    [8, 20000, 100000, 술유흥],
    [9, 10000, 150000, 생활마트],
    [10, 10000, 300000, 백화점패션],
    [11, 1000, 20000, 교통],
    [12, 3000, 15000, 뷰티미용],
    [13, 5000, 15000, 의료건강],
    [14, 30000, 50000, 금융보험],
    [15, 1000, 20000, 문화여가],
    [16, 50000, 200000, 여행],
    [17, 5000, 100000, 기타],
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
    f = open('private_expenditure.csv', 'w', encoding='utf-8')
    wr = csv.writer(f)
    wr.writerow(['accountbook_id','category_id','payment_id','date','title','amount'])
    # 지출 내역 생성
    for _ in range(EXPENDITURE_NUMBER):
        [transaction] = getRandomData(EXPENDITURE_CATEGORY)
        [payment] = getRandomData(PAYMENTS)
        date = getRandomDate()
        [title] = getRandomData(transaction[3])
        amount = getRandomAmount(transaction[1],transaction[2])
        wr.writerow([ACCOUNTBOOK_ID, transaction[0], payment,date,title,amount])

create_csv()
