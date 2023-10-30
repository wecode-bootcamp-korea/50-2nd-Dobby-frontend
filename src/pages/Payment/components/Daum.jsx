// import React, { useState } from 'react';
// import DaumPostcode from 'react-daum-postcode';
// import './Daum.scss';

// const Daum = () => {
//   //클릭 시 수행될 팝업 생성 함수
//   // const open = useDaumPostcodePopup(postcodeScriptUrl);

//   const handleComplete = data => {
//     let fullAddress = data.address;
//     let extraAddress = '';
//     //R은 주소타입 : 도로명주소를 뜻함
//     if (data.addressType === 'R') {
//       // data.bname은 주소 데이터 객체에서 해당 주소의 법정동 이름을 가져올 때 사용되는 속성
//       if (data.bname !== '') {
//         extraAddress += data.bname;
//       }
//       if (data.buildingName !== '') {
//         extraAddress +=
//           extraAddress !== '' ? `,${data.buildingName}` : data.buildingName;
//       }
//       fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
//     }
//     console.log(fullAddress);
//   };

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setPopup(true);
//         }}
//       >
//         test
//       </button>
//     </div>
//   );
// };

// export default Daum;
