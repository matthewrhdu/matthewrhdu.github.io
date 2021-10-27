from random import randint


def main():
    file = open("words")

    text = file.read()
    file.close()
    textlst = text.split(sep='\n')

    s = ""
    size = randint(0, len(textlst) - 1)
    for i in range(100):
        s += f"{i + 1}\t{textlst[i]}\n"
    print(s)
    file = open("Random_100.txt", 'w')
    file.write(s)
    file.close()


if __name__== '__main__':
    main()
