import sys
import random
import csv

# 사용자 변경 변수 - 실행 전 원하는 값으로 설정해주세요.
PAYMENT_MAX_ID = 17 # 최대 payment id
PAYMENT_NUM_PER_USER = 3 # user 당 생성할 결제수단 개수
USER_ID_LIST = [11,16,18,23] # 생성을 원하는 user id 목록

# setup
payment_list = list(range(1, PAYMENT_MAX_ID+1))

def getRandomPaymentId():
    return random.sample(payment_list, PAYMENT_NUM_PER_USER)

def create_csv():
    f = open('payment.csv', 'w', encoding='utf-8')
    wr = csv.writer(f)
    wr.writerow(['user_id','payment_id'])
    for id in USER_ID_LIST:
        payments = getRandomPaymentId()
        for payment in payments:
            wr.writerow([id, payment])

create_csv()
