export default function primitiveSample() {
    let name: string = "watataku";
    //name = 123
    console.log('primitive sample 1:', typeof name, name);

    let age = 24
    // age = "24" // stringの値を再代入しようとするとエラーになる
    console.log('primitive sample 2:', typeof age, age)

    let isSingle = true
    // isSingle = "foo" // stringの値を再代入しようとするとエラーになる
    console.log('primitive sample 3:', typeof isSingle, isSingle)

    // 判定式の結果も代入できる
    let isOver20: boolean = age > 20
    console.log('primitive sample 4:', typeof isOver20, isOver20)
}