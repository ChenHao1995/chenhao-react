export function totalvalue(data){
	return {
		type:'TOTAL_VALUE',
		data
	}
}
export function scoreToStartInitValue(data){
	return {
    type:'STS_INITVALUE',
    data 
	}
}
export function scoreToStartValue(data){
  return {
    type:'STS_VALUE',
    data 
  }
}
export function remark(data){
  return {
    type:'REMARK_VALUE',
    data 
  }
}
export function recommend(data){
  return {
    type:'RECOMMEND_VALUE',
    data 
  }
}




