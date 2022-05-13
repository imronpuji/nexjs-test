// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const foods = [
  	{name:'ikan tengiri'},
  	{name:'ikan nila goreng'},
  	{name:'ikan bandeng kuah'},
  	{name:'ikan lele goreng'},
  	{name:'ikan salmon bakar'},
  ]
  res.status(200).json(foods)
}
