export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
           return action.payload === 'up'
               ? [...state].sort((a,b) => {
               if(a.name > b.name){
                   return 1
               } else {
                   return -1
               }
           })
               :[...state].sort((a,b) => {
               if(a.name < b.name){
                   return 1
               } else {
                   return -1
               }
           })
        }
        case "check": {
            return [...state].filter(item => item.age === action.payload)
        }
        default: return state
    }
};