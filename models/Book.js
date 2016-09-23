export default (sequileze,DataType) => {
  const Books = sequileze.define('Books', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  });
  return Books;
}
