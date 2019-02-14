console.clear();

//People dropping off a form (Action Creator)
const createPolicy = (name, amount) => {
  return { //Action (a corm in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount 
    }
  };
};

const deletePolicy = (name) => {
  return { //Action (a corm in our analogy)
    type: 'DELETE_POLICY',
    payload: {
      name: name, 
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { //Action (a corm in our analogy)
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};



//REDUCERS (Departments of insurance co)

const claimsHistory = (oldListOfClaims = [], action) => {
   if(action.type === 'CREATE_CLAIM'){
     return [...oldListOfClaims, action.payload];
   }
  
  return oldListOfClaims;
  
};

const accounting = (bagOfMoney = 100, action) => {
   if(action.type === 'CREATE_CLAIM'){
     return bagOfMoney - action.payload.amountOfMoneyToCollect;
   }
  else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
   if(action.type === 'DELETE_POLICY'){
     return listOfPolicies.filter(name => name !== action.payload.name)
   }
  else if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }
  
  return listOfPolicies;
};


//REDUX STUFF

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting, 
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Pete', 10));
store.dispatch(createPolicy('Chandler', 20));
store.dispatch(createPolicy('Maddy', 30));

store.dispatch(createClaim('Maddy', 20));
store.dispatch(createClaim('Pete', 5));

store.dispatch(deletePolicy('Pete'));

console.log(store.getState());