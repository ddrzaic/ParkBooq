import React from "react";
import * as S from "./Pinpoint.styled";
import Svg, { Mask, Path } from "react-native-svg";

type PinpointProps = {
  color: string;
};

export const Pinpoint = ({ color }: PinpointProps) => {
  return (
    <S.PinpointContainer color={color}>
      <Svg width="17" height="23" viewBox="0 0 17 23" fill="none" opacity={0.8}>
        <Mask id="path-1-inside-1_9_368" fill="white">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.197994 8.53815C0.197994 10.6043 0.955226 12.4935 2.2073 13.9435L8.488 22.682L14.9752 13.6562C16.0851 12.248 16.7474 10.4704 16.7474 8.53815C16.7474 3.96815 13.0427 0.263428 8.47272 0.263428C3.90271 0.263428 0.197994 3.96815 0.197994 8.53815ZM8.37273 11.3559C6.58249 11.3559 5.13121 9.90459 5.13121 8.11435C5.13121 6.32411 6.58249 4.87283 8.37273 4.87283C10.163 4.87283 11.6142 6.32411 11.6142 8.11435C11.6142 9.90459 10.163 11.3559 8.37273 11.3559Z"
          />
        </Mask>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.197994 8.53815C0.197994 10.6043 0.955226 12.4935 2.2073 13.9435L8.488 22.682L14.9752 13.6562C16.0851 12.248 16.7474 10.4704 16.7474 8.53815C16.7474 3.96815 13.0427 0.263428 8.47272 0.263428C3.90271 0.263428 0.197994 3.96815 0.197994 8.53815ZM8.37273 11.3559C6.58249 11.3559 5.13121 9.90459 5.13121 8.11435C5.13121 6.32411 6.58249 4.87283 8.37273 4.87283C10.163 4.87283 11.6142 6.32411 11.6142 8.11435C11.6142 9.90459 10.163 11.3559 8.37273 11.3559Z"
          fill="white"
        />
        <Path
          d="M2.2073 13.9435L4.09907 12.31L4.17188 12.3943L4.2369 12.4847L2.2073 13.9435ZM8.488 22.682L10.5176 24.1407L8.488 26.9646L6.4584 24.1407L8.488 22.682ZM14.9752 13.6562L12.9456 12.1975L12.9779 12.1525L13.0122 12.109L14.9752 13.6562ZM0.315533 15.5771C-1.31364 13.6903 -2.30146 11.2265 -2.30146 8.53815H2.69745C2.69745 9.98205 3.22409 11.2967 4.09907 12.31L0.315533 15.5771ZM6.4584 24.1407L0.1777 15.4023L4.2369 12.4847L10.5176 21.2232L6.4584 24.1407ZM17.0048 15.115L10.5176 24.1407L6.4584 21.2232L12.9456 12.1975L17.0048 15.115ZM19.2469 8.53815C19.2469 11.0515 18.3832 13.3701 16.9382 15.2034L13.0122 12.109C13.7871 11.1258 14.248 9.8893 14.248 8.53815H19.2469ZM8.47272 -2.23602C14.4231 -2.23602 19.2469 2.58774 19.2469 8.53815H14.248C14.248 5.34856 11.6623 2.76288 8.47272 2.76288V-2.23602ZM-2.30146 8.53815C-2.30146 2.58774 2.5223 -2.23602 8.47272 -2.23602V2.76288C5.28312 2.76288 2.69745 5.34856 2.69745 8.53815H-2.30146ZM7.63066 8.11435C7.63066 8.52418 7.9629 8.85641 8.37273 8.85641V13.8553C5.20208 13.8553 2.63176 11.285 2.63176 8.11435H7.63066ZM8.37273 7.37228C7.9629 7.37228 7.63066 7.70452 7.63066 8.11435H2.63176C2.63176 4.9437 5.20208 2.37338 8.37273 2.37338V7.37228ZM9.1148 8.11435C9.1148 7.70452 8.78256 7.37228 8.37273 7.37228V2.37338C11.5434 2.37338 14.1137 4.9437 14.1137 8.11435H9.1148ZM8.37273 8.85641C8.78256 8.85641 9.1148 8.52418 9.1148 8.11435H14.1137C14.1137 11.285 11.5434 13.8553 8.37273 13.8553V8.85641Z"
          fill="white"
          mask="url(#path-1-inside-1_9_368)"
        />
      </Svg>
    </S.PinpointContainer>
  );
};
