import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const Logo = () => (
  <Svg width="51" height="51" viewBox="0 0 41 41" fill="none">
    <Rect width="41" height="41" rx="10.4435" fill="#3871E0" />
    <Path
      d="M10.154 10.3025C10.7961 10.3025 11.3453 10.4108 11.8018 10.6274C12.2582 10.844 12.6063 11.1534 12.8461 11.5557C13.0937 11.958 13.2174 12.4453 13.2174 13.0178C13.2174 13.3504 13.1633 13.6831 13.055 14.0157C12.9544 14.3484 12.792 14.6501 12.5676 14.9208C12.351 15.1916 12.057 15.4121 11.6857 15.5823C11.3221 15.7447 10.8734 15.8259 10.3397 15.8259H9.12126V18.7501H7.7636V10.3025H10.154ZM10.3397 14.5147C10.6336 14.5147 10.8812 14.4644 11.0823 14.3639C11.2834 14.2633 11.4382 14.1356 11.5465 13.9809C11.6625 13.8262 11.7437 13.6676 11.7901 13.5052C11.8443 13.335 11.8714 13.1841 11.8714 13.0526C11.8714 12.9134 11.8482 12.7625 11.8018 12.6001C11.7553 12.4299 11.678 12.2713 11.5697 12.1243C11.4614 11.9696 11.3105 11.8458 11.1171 11.753C10.9237 11.6524 10.6762 11.6021 10.3745 11.6021H9.12126V14.5147H10.3397ZM17.1782 18.8778C16.714 18.8778 16.2924 18.7811 15.9133 18.5877C15.542 18.3943 15.248 18.108 15.0314 17.729C14.8148 17.3422 14.7065 16.8664 14.7065 16.3017C14.7065 15.7447 14.8187 15.269 15.043 14.8744C15.2751 14.4722 15.5768 14.1627 15.9481 13.9461C16.3272 13.7295 16.7372 13.6212 17.1782 13.6212C17.6501 13.6212 18.0291 13.714 18.3153 13.8997C18.6093 14.0854 18.8375 14.3058 19 14.5611L18.9303 14.7468L19.058 13.8417H20.2532V18.7501H18.9536V17.5549L19.0812 17.8682C19.0503 17.9146 18.9884 17.992 18.8955 18.1003C18.8027 18.2009 18.6751 18.313 18.5126 18.4368C18.3502 18.5606 18.1568 18.665 17.9324 18.7501C17.7158 18.8352 17.4644 18.8778 17.1782 18.8778ZM17.5379 17.8102C17.77 17.8102 17.9788 17.7677 18.1645 17.6826C18.3579 17.5975 18.5203 17.4776 18.6519 17.3228C18.7911 17.1681 18.8917 16.9825 18.9536 16.7659V15.6983C18.8917 15.4972 18.7911 15.3231 18.6519 15.1761C18.5126 15.0214 18.3424 14.9015 18.1413 14.8164C17.9479 14.7313 17.7313 14.6888 17.4915 14.6888C17.2284 14.6888 16.9848 14.7545 16.7604 14.886C16.5361 15.0175 16.3543 15.1993 16.215 15.4314C16.0835 15.6635 16.0178 15.9304 16.0178 16.2321C16.0178 16.526 16.0874 16.7929 16.2266 17.0327C16.3659 17.2726 16.5516 17.4621 16.7836 17.6013C17.0157 17.7406 17.2671 17.8102 17.5379 17.8102ZM23.742 13.8417L23.858 15.2341L23.8116 15.0369C23.9508 14.7429 24.1404 14.4915 24.3802 14.2826C24.6277 14.066 24.8792 13.9036 25.1344 13.7953C25.3897 13.6792 25.5986 13.6212 25.7611 13.6212L25.703 14.9208C25.3317 14.8899 25.0068 14.9595 24.7283 15.1297C24.4575 15.2922 24.2448 15.5088 24.0901 15.7795C23.9431 16.0503 23.8696 16.3365 23.8696 16.6382V18.7501H22.57V13.8417H23.742ZM27.6136 18.7501V9.69909H28.9132V18.7501H27.6136ZM30.1316 15.4546L32.3712 18.7501H30.8627L29.2729 16.1973L30.1316 15.4546ZM28.5187 17.2764L28.3911 16.0232L31.3733 13.7256L32.1623 14.4219L28.5187 17.2764ZM9.5302 22.3025C10.3889 22.3025 11.0658 22.4765 11.5609 22.8247C12.0637 23.1728 12.3151 23.7066 12.3151 24.426C12.3151 24.9056 12.203 25.3156 11.9786 25.656C11.762 25.9887 11.4564 26.2478 11.0619 26.4335C10.6674 26.6114 10.2071 26.7081 9.68105 26.7236L9.47218 26.0041C10.0988 26.0119 10.6558 26.1124 11.1431 26.3058C11.6305 26.4915 12.0173 26.7584 12.3035 27.1065C12.5898 27.4469 12.7329 27.853 12.7329 28.3249C12.7329 28.7659 12.6516 29.141 12.4892 29.4505C12.3267 29.7522 12.1101 29.9997 11.8394 30.1931C11.5686 30.3865 11.263 30.5296 10.9227 30.6225C10.5823 30.7076 10.2264 30.7501 9.85511 30.7501H7.22103V22.3025H9.5302ZM9.75068 25.8997C10.1529 25.8997 10.4469 25.7837 10.6326 25.5516C10.826 25.3118 10.9227 25.0333 10.9227 24.7161C10.9227 24.3293 10.8028 24.0469 10.5629 23.869C10.3231 23.6911 9.99822 23.6021 9.58822 23.6021H8.57868V25.8997H9.75068ZM9.79709 29.4969C10.0833 29.4969 10.3425 29.4582 10.5746 29.3809C10.8066 29.2958 10.9884 29.1681 11.1199 28.9979C11.2592 28.82 11.3288 28.5995 11.3288 28.3365C11.3288 28.0425 11.2476 27.8143 11.0851 27.6519C10.9304 27.4894 10.7293 27.3734 10.4817 27.3038C10.2342 27.2341 9.97502 27.1993 9.70426 27.1993H8.57868V29.4969H9.79709ZM13.8571 28.2437C13.8571 27.7486 13.9731 27.3038 14.2052 26.9092C14.4373 26.507 14.7622 26.1937 15.1799 25.9693C15.6054 25.7372 16.085 25.6212 16.6188 25.6212C17.1681 25.6212 17.6438 25.7372 18.0461 25.9693C18.4561 26.1937 18.7733 26.507 18.9976 26.9092C19.222 27.3038 19.3341 27.7486 19.3341 28.2437C19.3341 28.7388 19.222 29.1875 18.9976 29.5897C18.7733 29.9843 18.4561 30.2976 18.0461 30.5296C17.6438 30.7617 17.1642 30.8778 16.6072 30.8778C16.0812 30.8778 15.6093 30.7733 15.1915 30.5645C14.7738 30.3479 14.445 30.0423 14.2052 29.6478C13.9731 29.2532 13.8571 28.7852 13.8571 28.2437ZM15.1683 28.2553C15.1683 28.5415 15.2302 28.8045 15.354 29.0444C15.4778 29.2764 15.648 29.4621 15.8646 29.6013C16.0812 29.7406 16.321 29.8102 16.584 29.8102C16.8702 29.8102 17.1178 29.7406 17.3267 29.6013C17.5433 29.4621 17.7096 29.2764 17.8256 29.0444C17.9494 28.8045 18.0113 28.5415 18.0113 28.2553C18.0113 27.9613 17.9494 27.6983 17.8256 27.4662C17.7096 27.2264 17.5433 27.0369 17.3267 26.8976C17.1178 26.7584 16.8702 26.6888 16.584 26.6888C16.3132 26.6888 16.0696 26.7623 15.853 26.9092C15.6441 27.0485 15.4778 27.2341 15.354 27.4662C15.2302 27.6983 15.1683 27.9613 15.1683 28.2553ZM20.2936 28.2437C20.2936 27.7486 20.4097 27.3038 20.6417 26.9092C20.8738 26.507 21.1987 26.1937 21.6165 25.9693C22.0419 25.7372 22.5216 25.6212 23.0553 25.6212C23.6046 25.6212 24.0804 25.7372 24.4826 25.9693C24.8926 26.1937 25.2098 26.507 25.4341 26.9092C25.6585 27.3038 25.7707 27.7486 25.7707 28.2437C25.7707 28.7388 25.6585 29.1875 25.4341 29.5897C25.2098 29.9843 24.8926 30.2976 24.4826 30.5296C24.0804 30.7617 23.6007 30.8778 23.0437 30.8778C22.5177 30.8778 22.0458 30.7733 21.6281 30.5645C21.2103 30.3479 20.8816 30.0423 20.6417 29.6478C20.4097 29.2532 20.2936 28.7852 20.2936 28.2437ZM21.6049 28.2553C21.6049 28.5415 21.6668 28.8045 21.7905 29.0444C21.9143 29.2764 22.0845 29.4621 22.3011 29.6013C22.5177 29.7406 22.7575 29.8102 23.0205 29.8102C23.3068 29.8102 23.5543 29.7406 23.7632 29.6013C23.9798 29.4621 24.1461 29.2764 24.2622 29.0444C24.3859 28.8045 24.4478 28.5415 24.4478 28.2553C24.4478 27.9613 24.3859 27.6983 24.2622 27.4662C24.1461 27.2264 23.9798 27.0369 23.7632 26.8976C23.5543 26.7584 23.3068 26.6888 23.0205 26.6888C22.7498 26.6888 22.5061 26.7623 22.2895 26.9092C22.0806 27.0485 21.9143 27.2341 21.7905 27.4662C21.6668 27.6983 21.6049 27.9613 21.6049 28.2553ZM29.109 30.8778C28.6757 30.8778 28.2773 30.7733 27.9138 30.5645C27.5579 30.3556 27.2717 30.0578 27.0551 29.671C26.8385 29.2842 26.7302 28.8239 26.7302 28.2901C26.7302 27.7408 26.8462 27.269 27.0783 26.8744C27.3181 26.4722 27.6314 26.1627 28.0182 25.9461C28.4127 25.7295 28.8421 25.6212 29.3062 25.6212C29.7317 25.6212 30.0992 25.7063 30.4086 25.8765C30.7258 26.0467 30.9888 26.2672 31.1977 26.5379L31.07 26.886V25.7488H32.3696V33.1057H31.0816V29.6129L31.1164 30.1003C30.923 30.3246 30.6484 30.5103 30.2925 30.6573C29.9444 30.8043 29.5499 30.8778 29.109 30.8778ZM29.5615 29.845C29.8091 29.845 30.0373 29.7986 30.2461 29.7058C30.455 29.6129 30.6291 29.4853 30.7683 29.3228C30.9153 29.1604 31.0159 28.9747 31.07 28.7659V27.7795C31.0004 27.5629 30.8921 27.3773 30.7451 27.2225C30.6059 27.0601 30.4357 26.9363 30.2345 26.8512C30.0411 26.7661 29.8168 26.7236 29.5615 26.7236C29.2907 26.7236 29.0393 26.7932 28.8073 26.9324C28.5752 27.064 28.3895 27.2496 28.2503 27.4894C28.111 27.7292 28.0414 28 28.0414 28.3017C28.0414 28.5957 28.111 28.8587 28.2503 29.0908C28.3895 29.3228 28.5752 29.5085 28.8073 29.6478C29.0393 29.7793 29.2907 29.845 29.5615 29.845Z"
      fill="white"
    />
  </Svg>
);