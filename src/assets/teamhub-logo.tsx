export default function TeamHubLogo(props: { width: number; height: number }) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_26_21"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x="11"
          y="20"
          width="278"
          height="267"
        >
          <ellipse cx="150" cy="153.5" rx="139" ry="133.5" fill="#FAB600" />
        </mask>
        <g mask="url(#mask0_26_21)">
          <ellipse cx="150" cy="153.5" rx="139" ry="133.5" fill="#FAB600" />
          <path
            d="M143.2 94.6001C133.867 99.4001 130 105.133 130 114.2C130 125.667 133.6 137.133 142.8 154.733C155.067 178.6 155.733 189.667 145.6 201.133C140.667 206.867 135.333 209.667 127.467 210.867C121.733 211.667 121.2 212.067 115.333 221.267C112 226.467 106 236.067 101.867 242.6C97.7333 249 90.8 261.267 86.5333 269.667C82.2667 278.067 77.8667 285.533 76.9333 286.2C72.8 288.733 70 298.2 70 309.267C70 325.133 72 333.533 76.4 335.267C80.8 337 126.133 339 127.867 337.533C128.533 336.867 128.267 335.533 127.2 334.2C125.733 332.467 123.733 332.2 116.133 332.733L106.8 333.4L111.6 330.867C114.267 329.533 117.733 326.733 119.333 324.733C122 321.4 122.267 319.933 121.6 311.667C120.933 303 121.067 302.6 122.8 306.333C126.4 314.467 124.8 323.8 118.8 328.6C116 330.867 116.133 331 121.467 331C124.933 331 128.267 331.933 130.4 333.667C132.933 335.667 134 335.933 134.533 334.733C134.933 333.8 134.933 334.333 134.667 335.8C134 338.333 134.533 338.733 139.067 339.133C148.4 340.067 148.933 339.667 148.4 331.533C148 325.267 148.267 324.333 150.4 324.333C154.4 324.333 162.8 319.4 165.2 315.667C168.4 310.733 168.933 312.067 166.667 319.667C165.6 323.133 164.8 328.6 164.8 331.533C164.933 336.333 165.067 336.067 166.133 329C168.133 315.4 171.6 307.133 185.2 284.333C193.6 270.2 194.933 264.2 192.8 249.133C191.733 241.933 189.867 236.2 186.533 229.667L181.6 220.467L181.2 196.867L180.667 173.4L185.2 173.933C187.733 174.2 189.467 173.933 189.2 173.4C188.8 172.867 187.467 172.333 186.267 172.333C179.867 172.2 167.333 163.667 167.333 159.267C167.333 158.2 168.933 159.133 171.2 161.533C179.333 170.2 197.2 174.6 205.867 170.067C208.4 168.733 211.6 166.067 213.067 164.2L215.6 160.733L211.467 156.6C208.933 154.2 207.467 151.267 207.467 149.4C207.733 146.467 207.733 146.467 208.267 149.267C209.2 154.067 215.2 159 220.133 159C225.867 159 229.733 154.867 229.733 148.733C229.733 144.467 229.067 143.667 220.4 138.2C215.333 135 210.667 132.6 210 133C209.333 133.4 206.8 132.733 204.133 131.533C199.733 129.267 199.467 129 200.133 123.8C200.533 120.733 200.267 116.867 199.467 115C198.267 112.2 198.267 112.467 198.8 117.133C199.733 123.8 198.267 127.533 195.333 125.533C193.867 124.467 193.733 123.933 195.067 123.4C197.2 122.6 197.067 117.667 194.667 114.467C193.067 112.333 193.067 111.533 194.4 110.733C195.333 110.067 194.4 109.667 191.733 109.667C189.467 109.667 187.067 109 186.667 108.333C185.6 106.6 191.333 104.467 194 105.4C195.733 106.067 195.733 105.8 194.267 103.933C193.2 102.733 190.667 101.667 188.533 101.4C184.8 101 184.667 100.733 186.4 98.4667C188.133 96.0667 188.4 96.0667 193.2 100.467C196.4 103.4 199.067 107.667 200.667 112.333C202.133 116.333 203.2 118.733 203.333 117.533C203.333 113.267 199.2 103.667 195.733 99.9334C191.6 95.6667 183.467 93.1334 177.867 94.3334L174 95.2667L177.333 100.733C179.2 103.8 182 109 183.6 112.333C185.2 115.667 191.6 123.133 197.6 129C209.067 140.2 212.933 145.8 203.067 136.733C190.133 125.133 184.533 118.6 180.533 110.733C172.667 95.2667 167.733 91.0001 157.2 91.0001C152.533 91.0001 148.267 92.0667 143.2 94.6001ZM168.933 107.933C172 111.4 176.933 121.667 176.4 123.267C176 124.2 174.533 122.067 172.933 118.6C171.333 115.267 168.8 111.8 167.2 111C163.733 109 158.267 110.333 154.4 113.933C150.8 117.267 150.267 120.2 153.733 117.533C155.867 115.8 155.867 115.8 154 118.2C152.267 120.333 152.4 120.867 155.2 123.133C159.2 126.333 163.733 127.533 168.133 126.467C171.067 125.667 171.467 125 170.8 121.267L170 117L171.867 121C173.467 124.467 173.467 125.133 171.467 126.6C166.4 130.467 151.333 126.333 151.333 121C151.333 119.933 150.8 119 150.133 119C148 119 150.267 113.667 154 109.667C158.4 105 165.6 104.2 168.933 107.933ZM166.267 116.6C165.733 120.467 165.467 120.6 163.867 118.333C162.533 116.467 162.4 115.4 163.467 114.067C166 111.133 166.933 112.067 166.267 116.6ZM192.667 115.133C192.667 115.933 192.133 116.067 191.333 115.667C190.667 115.267 190 114.2 190 113.533C190 112.733 190.667 112.6 191.333 113C192.133 113.4 192.667 114.467 192.667 115.133ZM148.667 157C151.867 163.533 154.267 170.333 154.667 174.333C155.333 180.467 155.2 180.2 152.667 171.133C151.067 164.867 147.6 157.533 143.333 150.867C139.733 145.133 136.667 139.933 136.667 139.4C136.667 136.867 143.6 147.133 148.667 157ZM228 149.667C229.067 151.4 225.2 157.667 223.067 157.667C221.867 157.667 221.867 157.267 223.067 156.067C224 155.133 224.667 153.133 224.667 151.4C224.667 148.2 226.533 147.267 228 149.667ZM175.2 170.467C175.6 171 174.533 171 172.667 170.6C170.8 170.067 168.533 169.667 167.733 169.667C166.8 169.667 166 169.133 166 168.467C166 167.133 173.733 168.867 175.2 170.467ZM179.333 183.533C179.333 186.733 179.733 190.6 180.133 191.933C180.667 193.8 180.667 193.933 179.6 192.333C177.467 189.133 176.133 177.667 177.867 177.667C178.667 177.667 179.333 180.067 179.333 183.533ZM94.6667 282.467C88.1333 284.867 87.0667 285.8 82.1333 295C77.7333 303 76.4 302.067 80.5333 293.933C84.4 286.333 91.8667 280.333 97.3333 280.467C98.9333 280.467 97.7333 281.4 94.6667 282.467ZM127.867 304.333C128.4 308.2 128.267 309.4 127.467 307.667C126.8 306.2 126 302.333 125.467 299C124.933 295.133 125.067 293.933 125.867 295.667C126.533 297.133 127.333 301 127.867 304.333Z"
            fill="#0F1012"
          />
          <path
            d="M116 112.467C112.667 115.534 110 118.734 110 119.534C110 120.334 111.6 119 113.467 116.6C116.933 112.2 124.267 107.534 125.733 108.867C126.133 109.267 125.733 109.667 124.8 109.667C124 109.667 120.267 112.467 116.667 115.8C113.067 119.134 109.733 121.667 109.067 121.4C108.533 121.134 107.067 123.934 105.867 127.667C104.667 131.267 102.533 138.2 100.933 143.134C99.3333 147.934 95.4667 156.6 92.1333 162.467C87.6 170.067 86 174.467 86 178.334C86 189.134 98.6667 204.334 110.933 208.467C117.467 210.6 130.933 209.267 137.6 205.934C143.6 202.734 147.6 197.267 149.867 188.734C152 180.734 149.867 172.6 141.333 157.667C132.133 141.667 128.8 131.8 127.6 118.334C126.4 105.267 124.8 104.467 116 112.467Z"
            fill="#0F1012"
          />
          <path
            d="M203.467 122.6C203.333 124.2 204.933 127.267 206.8 129.267L210.267 133L207.6 128.334C206.133 125.8 204.667 122.734 204.267 121.667C203.733 120.334 203.467 120.6 203.467 122.6Z"
            fill="#0F1012"
          />
          <path
            d="M221.467 161C219.333 162.067 215.733 164.733 213.2 166.867C210.8 169 206.667 171.533 204.133 172.467C199.733 174.067 199.333 174.733 199.333 179.133C199.333 194.067 209.733 201.933 220.8 195.4C225.2 192.733 230 184.067 230 178.6C230 174.2 227.333 161.267 226.133 160.067C225.733 159.533 223.6 159.933 221.467 161Z"
            fill="#0F1012"
          />
        </g>
      </svg>
    </>
  );
}
