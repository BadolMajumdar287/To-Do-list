

export function cookieSet(res,userId){

  return res.cookie("session",userId._id,{
           
          maxAge: 60 * 60 * 24 * 1000 * 3,
          httpOnly: true,
          secure: process.env.NODE_END === 'production'

      });

}