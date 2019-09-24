const fakeRequest = () =>{
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      return resolve({data:'chenhao'})
    },5000)
  })
}

export function request(action_name,data){
  return function(dispatch) {
    dispatch({type:'REQUEST',data})
    return fakeRequest(data).then((data) =>{
      dispatch({type:'REQUEST_SUCCESS',data})
      return data
    })
  }
}
