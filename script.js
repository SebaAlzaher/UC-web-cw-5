function BMI(weight,height)
{
  return  weight/(height*height);

}

 
console.log(BMI());


function status(BMI)
{
     
      if(BMI<18.5)
         console.log("لديك نقص في الوزن ");

         if(25>BMI&&18.5<=BMI) 
         console.log("وزنك صحي");

         if(25<=BMI)
         console.log("لديك زيادة في الوزن");


}


