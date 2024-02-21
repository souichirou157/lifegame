'use strict'
console.log('lifegame');

class LifeGameMain{
    constructor(R,G,B,td,time)
    {
        this.R = R;
        this.G = G;
        this.B = B;
        this.Table = document.createElement('table');
        this.table = document.querySelector('.table');
        this.Table.classList.add('table');
        this.LifeField = [[], [], [], [], [], [], []];
        this.time = time;

        for(let i=0;i < this.LifeField.length;i++){
            this.tr = document.createElement('tr');
            this.tr.class = 'row';
            this.AddColor(this.tr);
            for(let j =0 ; j <  this.LifeField.length;j++){
                this.td = document.createElement('td');
                this.td.textContent = this.LifeField[i][j];
                this.td.classList.add(`column`) ;
                this.td.style.width= td;
                this.td.style.height = td;
                this.AddColor(this.td);
                this.tr.appendChild(this.td);    
            }

            this.table.style= "margin: 32px;";
            this.table.appendChild(this.tr);

            setInterval(()=>this.IniRgb(this.table),this.time);//マスの色を・更新
        }  
    }

    AddColor(obj){
        this.red = Math.floor(Math.random()*this.R);
        this.green = Math.floor((Math.random()*this.G));
        this.blue = Math.floor(Math.random()*this.B);
        obj.style.background= `rgb(${this.red},${this.green},${this.blue})`;
    }

    IniRgb(obj){
        this.AddColor(obj);//マスの外側
        this.AddColor(this.table.rows[Math.floor((Math.random()* this.LifeField.length))].cells[Math.floor((Math.random()*this.LifeField.length))]);
    }


}

new LifeGameMain(255,255,255,'30px','30px',10);