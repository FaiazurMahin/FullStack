TYPESCRIPT e extension e ts use korbo..Lets say, let url = "abc" dilam, pore url = 5 declare korle hobena, error dibe, karon url already string hishabe dore nise.
function(a,b){
    //...   parameters call korinai, so abar error dibe
}
function(a:number, b:string)string:{  //even function o kishe ashbe sheta vole diya jai
    //...
}

ts e props declare kore kemne?

type ButtonProps = {backgroundColor : string, fontSize: number, pillShape:boolean} ///ekhane jodi lets say fontSize?:string dei, tahole kintu abar optional hoye jai oi prop ta..so abar oita button e call na dileo error ashbena
//abc: any mane any.string number boolean etc
?: makes a prop optional

export default function Button({backgroundColor, fontSize, pillShape}:{ButtonProps}){
backgroundColor.touppercase();....kaj korbe
but, fontSize e use korle error dibe..karon its number
} 



page ba kothao jokhon import korbo oi button.tsx file ta tokhon props bhul korle error dibe
<Button backgrundColor etc etc/>  //lets say ekhane amar mone nai ki ki use kora jai, ctr+space chaap dilei options chole ashe ar ekhane jodi ekta prop o miss jai tahole warning ashbe


lets say ts e ekta function likhlam with props and all..ts just knows je kon part ta holo jsx element..like return er pore jeta ashe..button er opor hover korlei dekhai dei


lets say,
const abc = ({props})=>{    //props e lets say{backgroundColor, fontSize} aseh,,ofc eigular string or number pass kora lagbe..type burronprops = {blabla}..instead of that lets just use react.cssproperties..then prop e jekono css shits use korte parbo
    return
}
export abc default

borderRadius: record<string,number>

custom component er opening and closing tag er majhkhane e kichu thakle shetake children bole

React.Reactnodes