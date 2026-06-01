function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    //recebe os valores e transforma em array
    let arr1 = []
    while(l1){
        arr1.push(l1.val);
        l1 = l1.next;
    }
    let arr2 = []
    while(l2){
        arr2.push(l2.val);
        l2 = l2.next;
    }
    //inverte pois os numeros estao invertidos
    arr1.reverse();
    arr2.reverse();

    //junta os numeros em string
    n1 = ""
    n2 = ""
    for(i=0;i<arr1.length;i++){
        n1 = n1 + arr1[i].toString();
    }
    for(i=0;i<arr2.length;i++){
        n2 = n2 + arr2[i].toString();
    }

    sum = parseInt(n1) + parseInt(n2)
    
    sumS = sum.toString();

    let first = 0;
    let current;

    for(i=sumS.length;i>0;i--){
        let node = new ListNode(sumS.charAt(i - 1),null);
        if(first === 0){
            first = node;
            current = node;
        }
        else{
            current.next = node;
            current = current.next;
        }
    }
    return first;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3,null)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4,null)));

console.log(addTwoNumbers(l1,l2));
