import * as React from "react";

const data = [
    'a', 'b', 'c', 'd', 'e'
];
const data2 = [
    {
        id: 'stsljldsjfkljf-2340',
        name: 'storeName1',
        description: 'sldjflskdjflsf',
        contact: 'string',
        fields: [],
    },
    {
        id: 'stsljldsjfkljf-2340',
        name: 'storeName2',
        description: 'sldjflskdjflsf',
        contact: 'string',
        fields: [],
    },{
        id: 'stsljldsjfkljf-2340',
        name: 'storeName3',
        description: 'sldjflskdjflsf',
        contact: 'string',
        fields: [],
    }
]


// data list to buttons
const TabBtn = (data) => {
    return (
        data.map((d, i) => 
        <button key={i}>{d}</button>)
    )
}

const TabItem = (data) => {
    return (
        <div>
            
        </div>
    )
}

const Tab = ({ btn, children }) => {
  return (
    <section>
      <div>{btn}</div>
      <div>{children}</div>
    </section>
  );
};
