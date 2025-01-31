  const accountId = 124
  let accountName = "Vikram"
  let email = "vikram@gmail.com"
  accountCity = 'Noida'


  accountName = "Pratham"
  email = 'vm@gmail.com'
  accountCity = 'New Delhi'
  {
    email = "vkm@gmail.com"
  }

  /* 
    Prefer not to use var
    because of issue in block scope and functional scope
  */
  console.table([accountName,email,accountCity])
  function test(){
    let a = 10;
    {
        a = 20;
        var b = 20;
    }
    console.log("a:",a,"b:",b)
  }
  test()