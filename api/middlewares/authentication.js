import jwt from 'jsonwebtoken';

export default () => { return (req, res, next) => {
  console.log(req.headers);
  const {authorization:auth} = req.headers;
  if(!auth || !auth.startsWith('Bearer ')) throw new Error('Authentication failed');
  try {
      const token = auth.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //attach the user to the jobs route
      req.user = {_id : decoded._id, email : decoded.email};
      next();
  } catch (error) {
      throw new Error('Authentication failed')
  }
 }
}