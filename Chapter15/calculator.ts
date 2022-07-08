class Calculator {
    print():void {
        console.log("Calculate this operation...");
    }
}

function add (x:number, y:number):number {
    return x + y;
};

export default function sub (x:number, y:number):number {
    return x - y;
};

// export {add, sub};
export {add};
export {Calculator};
