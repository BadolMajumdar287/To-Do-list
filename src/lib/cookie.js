import jwt from 'jsonwebtoken'

export function setSessionCookie(res, user) {

  const data = {
    _id: user._id,
    email: user.email,
    name: user.name
  }

  const expires = new Date(Date.now() + (60 * 60 * 24 * 1000 * 3));

  const token = jwt.sign({ exp: expires / 1000, data }, process.env.JWT_SECRET_KEY);

  return res.cookie("session", token, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_END === 'production'
  });

}