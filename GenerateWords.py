from random import randint


def main():
    file = open("words")

    text = file.read()
    file.close()
    textlst = text.split(sep='\n')

    s = ""
    for i in range(100):
        A = randint(0, len(textlst) - 1)
        s += f"{i + 1}\t{textlst[A]}\n"
    print(s)
    file = open("Random_100.txt", 'w')
    file.write(s)
    file.close()


if __name__== '__main__':
    main()
