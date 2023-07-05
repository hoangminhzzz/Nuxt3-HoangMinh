export default defineEventHandler(async (event) => {

  // const { name } = getQuery(event)
  // const { age }  = await readBody(event)
  // // api call with private key
  //  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=IeQQkywAYA57khg18LOlIyfktuAvET8XZCtc1Dle&currencies=EUR%2CUSD%2CCAD')
  // return {
  //   message: `Hello, ${name}! Your age ${age} years old`
  // }

  // api call with private key
   const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=IeQQkywAYA57khg18LOlIyfktuAvET8XZCtc1Dle')
  
   return data
})

