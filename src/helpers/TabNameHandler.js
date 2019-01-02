const TabNameHandler = (reducer) => {
  reducer.get('name') == 'nome' ? 
  document.title = 'Git Profile' :  
  document.title = reducer.get('name');
} 

export default TabNameHandler;