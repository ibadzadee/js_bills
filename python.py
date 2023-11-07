number = int(input("Ededi daxil edin:"))
S = 0
while number > 0:
    r = number %10
    S =S*10 + r
    number //= 10
print(S)