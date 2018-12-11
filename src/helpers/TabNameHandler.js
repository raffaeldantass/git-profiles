const TabNameHandler = (reducer) => {
  reducer.name == 'nome' ? 
  document.title = 'Git Profile' :  
  document.title = reducer.name;
} 

export default TabNameHandler;