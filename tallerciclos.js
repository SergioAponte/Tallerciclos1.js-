// 1.
// let suma=0
// let num=1
// while (num>0){
//     num=+prompt('digite los numeros a sumar')
//     suma+=num
// }console.log(`${suma}`)
// 2.
// let num=1
// while(num!=0){
//     num=Math.floor((Math.random(0,10))*10)
//     console.log(num)
// }
// 3.
// for (i=1;i<=20;i++){
//     num=Math.floor((Math.random(0,1000)*1000))
//     console.log(num)
// }
// 4.
// let impar=0
// let num=+prompt('digite un numero positivo')
// if (num>=0){
//     for (let i=1;i<=num;i++){
//         if (i%2!=0){
//             console.log(i)
//         }
//     }
// }
// 5.
// let cviejos=0,cadultos=0,cjovenes=0,cniños=0
// let pviejos=0,padultos=0,pjovenes=0,pniños=0
// let viejos=0,adultos=0,jovenes=0,niños=0
// personas=+prompt('digite la cantidad de personas a evaluar')
// for (i=1;i<=personas;i++){
//     edad=+prompt('digite la edad ')
//     peso=+prompt('digite el peso')
//     if (edad>=0 && edad<=12){
//         niños+=peso
//         cniños++
//         pniños=niños/cniños
//     }else if (edad>=13 && edad<=29){
//         jovenes+=edad
//         cjovenes++
//         pjovenes=jovenes/cjovenes
//     }else if (edad>=30 && edad<=59){
//         adultos+=edad
//         cadultos++
//         padultos=adultos/cadultos
//     }else{
//         viejos+=edad
//         cviejos++
//         pviejos=viejos/cviejos
//     }
// }
// console.log(`el promedio de peso de los niños es de ${pniños}`)
// console.log(`el promedio de peso de los jovenes es de ${pjovenes}`)
// console.log(`el promedio de peso de los adultos es de ${padultos}`)
// console.log(`el promedio de peso de los viejos es de ${pviejos}`)
// 6.
// for(let i=1;i<=1;i++){
//     for (let j=1;j<=5;j++){
//         for (let k=1;k<=4;k++){
//             document.write(`  ${i} - ${j} - ${k} `)
            
//         }
//         document.write(`<br>`)
//     }
   
// }

// 7.
// let p1=0,p2=0,p3=0
// let animal1=0,animal2=0,animal3=0
// let animales=+prompt(`seleccione los animales a evaluar
// 1.Elefantes
// 2. Jirafas
// 3. Chimpances`)
// switch (animales){
//     case 1:
//         for (i=1;i<=5;i++){
//             años=+prompt('digite la edad de los elefantes')
//             if (años>=0 && años<1){
//                 animal1++
//             }else if (años>=1 && años<3){
//                 animal2++
//             }else{
//                 animal3++
//             }
//         }   
//         p1=(animal1*100)/5
//         p2=(animal2*100)/5
//         p3=(animal3*100)/5
//         break
//     case 2:
//         for (i=1;i<=15;i++){
//             años=+prompt('digite la edad de las jirafas')
//             if (años>=0 && años<=1){
//                 animal1++
//             }else if (años>=2 && años<=3){
//                 animal2++
//             }else{
//                 animal3++
//             }
//         }            
//         p1=(animal1*100)/15
//         p2=(animal2*100)/15
//         p3=(animal3*100)/15
//         break
//     case 3:
//         for (i=1;i<=40;i++){
//             años=+prompt('digite la edad de los chimpances')
//             if (años>=0 && años<=1){
//                 animal1++
//             }else if (años>=2 && años<=3){
//                 animal2++
//             }else{
//                 animal3++
//             }
//         }
//         p1=(animal1*100)/15
//         p2=(animal2*100)/15
//         p3=(animal3*100)/15
//         break
// }            
// console.log(`el porcentaje de menores a 1 año es de ${p1}`)
// console.log(`el porcentaje de mayores a 1 año y menores a 3 años es de ${p2}`)
// console.log(`el porcentaje de mayores a 3 año es de ${p3}`)