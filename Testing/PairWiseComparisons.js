function invert(val){
    if (val === 0) {
        return 1
    } else {
        return 0
    }
}


function is_valid(val) {
    return val === "1" || val === "2"
}

class Matrix {
    constructor(data) {
        this.positions = {}
        for (let n = 0; n < data.length; n++){
            this.positions[n] = data[n]
        }

        this.items = []
        for (let __ = 0; __ < data.length; __++){
            let lst = []
            for (let _ = 0; _ < data.length; _++){
                lst.push(0)
            }
            this.items.push(lst)
        }
        this.x = 0
        this.y = 0
        this.max_index = data.length - 1
    }

    move(){
        if (this.x + 1 <= this.max_index) {
            this.x += 1
        } else {
            this.y += 1
            this.x = this.y
        }

    }

    display(self) {
        if (this.x !== this.y){
            const first = self.positions[self.y];
            const second = self.positions[self.x];

            const comparison = first + "vs" + second;

            let response = window.input(comparison);
            while (!is_valid(response)){
                document.getElementById("question").innerHTML = "Invalid."
                response = input(comparison).strip()
            }
            let value;
            if (response === "1") {
                value = 0
            } else{
                value = 1
            }

            this.items[this.y][this.x] = value
            this.items[this.x][this.y] = invert(value)
        }
        else {
            self.items[self.y][self.x] = 0
            self.move()
        }
    }

    has_next() {
        return this.x <= this.max_index && this.y <= this.max_index
    }

    straight_line(){
        let s = "";
        for (let i = 0; i < this.items.length; i++){
            for (let n = 0; n < this.items[i].length; n++){
                const str_row = [this.items[i][n]];
                s += str_row.join("")
            }
        }
        print(s)
    }
}

function main(){
    const lst = ["A", "B", "C", "D"]
    const m = new Matrix(lst)
    while (m.has_next()){
        m.display()
    }
}
