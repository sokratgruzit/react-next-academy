import styles from "./NotResult.module.scss";

function NotResult({ title, teaser }) {
  return (
    <div className={`${styles.notResult} ${"textStyles"}`}>
      <h1>{title}</h1>
      <h4>{teaser}</h4>
      <svg
        width="158"
        height="180"
        viewBox="0 0 158 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151.885 104.29H28.891C28.1383 104.294 27.4078 104.545 26.8117 105.005C26.2155 105.464 25.7867 106.107 25.591 106.834L11.841 155.99L6.89102 71.3585C6.86565 71.108 6.8956 70.8551 6.97876 70.6175C7.06192 70.3799 7.19625 70.1635 7.37227 69.9835C7.55144 69.8024 7.76599 69.6601 8.00254 69.5654C8.2391 69.4708 8.4926 69.4259 8.74727 69.4335H34.0473C34.7139 69.4361 35.3709 69.5926 35.9671 69.8907C36.5633 70.1888 37.0827 70.6206 37.4848 71.1522L45.8723 81.946C46.1889 82.3549 46.5955 82.6855 47.0605 82.912C47.5254 83.1385 48.0363 83.255 48.5535 83.2522H123.422V93.5647C123.422 94.4764 123.784 95.3508 124.429 95.9954C125.074 96.6401 125.948 97.0022 126.86 97.0022C127.771 97.0022 128.646 96.6401 129.29 95.9954C129.935 95.3508 130.297 94.4764 130.297 93.5647V79.8147C130.306 79.3576 130.224 78.9032 130.056 78.4781C129.887 78.0531 129.635 77.666 129.315 77.3395C128.995 77.013 128.613 76.7536 128.191 76.5766C127.77 76.3995 127.317 76.3084 126.86 76.3085H49.8598L42.5723 66.8897C41.5527 65.5849 40.2629 64.5161 38.7914 63.7567C37.3199 62.9972 35.7015 62.565 34.0473 62.4897H8.74727C7.5475 62.51 6.36386 62.7697 5.26589 63.2538C4.16791 63.7378 3.17773 64.4364 2.35352 65.3085C1.54365 66.1693 0.918483 67.1866 0.51649 68.298C0.114496 69.4094 -0.0558198 70.5913 0.016018 71.771L6.54727 176.477C6.63509 177.204 6.86894 177.906 7.23477 178.54C7.55115 178.971 7.96557 179.32 8.44376 179.559C8.92194 179.798 9.45017 179.92 9.98477 179.915H126.241C129.16 179.913 131.995 178.938 134.298 177.146C136.601 175.353 138.242 172.844 138.96 170.015L144.047 150.146C144.165 149.695 144.192 149.224 144.128 148.763C144.063 148.301 143.909 147.856 143.672 147.454C143.436 147.051 143.123 146.7 142.751 146.418C142.379 146.137 141.955 145.932 141.504 145.815C141.052 145.697 140.582 145.67 140.12 145.734C139.658 145.799 139.213 145.953 138.811 146.19C138.409 146.426 138.057 146.739 137.776 147.111C137.495 147.483 137.29 147.907 137.172 148.359L131.947 168.296C131.576 169.641 130.78 170.83 129.677 171.686C128.574 172.541 127.224 173.016 125.829 173.04H14.5223L31.5035 111.165H147.416L142.741 128.902C142.513 129.814 142.657 130.779 143.14 131.585C143.624 132.39 144.407 132.971 145.319 133.199C146.231 133.427 147.196 133.283 148.002 132.8C148.807 132.316 149.388 131.533 149.616 130.621L155.391 108.552C155.528 108.044 155.546 107.512 155.445 106.996C155.343 106.48 155.125 105.994 154.806 105.575C154.487 105.157 154.077 104.817 153.606 104.582C153.135 104.348 152.617 104.224 152.091 104.221L151.885 104.29Z"
          fill="white"
        />
        <path
          d="M76.3288 153.308C76.0066 153.628 75.7508 154.008 75.5763 154.427C75.4018 154.846 75.312 155.295 75.312 155.749C75.312 156.203 75.4018 156.652 75.5763 157.071C75.7508 157.49 76.0066 157.87 76.3288 158.19C76.6374 158.518 77.0101 158.781 77.424 158.96C77.8378 159.139 78.284 159.231 78.735 159.231C79.186 159.231 79.6322 159.139 80.046 158.96C80.4599 158.781 80.8326 158.518 81.1413 158.19C82.3271 157.006 83.9343 156.341 85.61 156.341C87.2857 156.341 88.8929 157.006 90.0788 158.19C90.3874 158.518 90.7601 158.781 91.174 158.96C91.5878 159.139 92.034 159.231 92.485 159.231C92.936 159.231 93.3822 159.139 93.796 158.96C94.2099 158.781 94.5826 158.518 94.8913 158.19C95.2134 157.87 95.4692 157.49 95.6437 157.071C95.8182 156.652 95.9081 156.203 95.9081 155.749C95.9081 155.295 95.8182 154.846 95.6437 154.427C95.4692 154.008 95.2134 153.628 94.8913 153.308C93.6767 152.082 92.2311 151.108 90.6381 150.444C89.045 149.78 87.3361 149.438 85.61 149.438C83.884 149.438 82.175 149.78 80.582 150.444C78.9889 151.108 77.5433 152.082 76.3288 153.308Z"
          fill="#969BA6"
        />
        <path
          d="M58.1094 131.79C57.1977 131.79 56.3233 132.152 55.6787 132.797C55.034 133.442 54.6719 134.316 54.6719 135.228C54.6719 136.139 55.034 137.014 55.6787 137.658C56.3233 138.303 57.1977 138.665 58.1094 138.665H64.9844C65.8961 138.665 66.7704 138.303 67.4151 137.658C68.0597 137.014 68.4219 136.139 68.4219 135.228C68.4219 134.316 68.0597 133.442 67.4151 132.797C66.7704 132.152 65.8961 131.79 64.9844 131.79H58.1094Z"
          fill="#969BA6"
        />
        <path
          d="M106.234 131.79C105.323 131.79 104.448 132.152 103.804 132.797C103.159 133.442 102.797 134.316 102.797 135.228C102.797 136.139 103.159 137.014 103.804 137.658C104.448 138.303 105.323 138.665 106.234 138.665H113.109C114.021 138.665 114.895 138.303 115.54 137.658C116.185 137.014 116.547 136.139 116.547 135.228C116.547 134.316 116.185 133.442 115.54 132.797C114.895 132.152 114.021 131.79 113.109 131.79H106.234Z"
          fill="#969BA6"
        />
        <path
          d="M75.2972 57.1027C75.1641 57.7548 75.2087 58.4307 75.4264 59.0596C75.6441 59.6886 76.0269 60.2474 76.5347 60.6777C77.1421 61.1582 77.8915 61.4242 78.6659 61.4339C79.1648 61.5377 79.6796 61.5377 80.1784 61.4339L98.6034 52.1527C104.388 53.9605 110.418 54.8649 116.478 54.8339C139.578 54.8339 157.728 42.7339 157.728 27.3339C157.728 14.6152 145.56 3.95895 127.41 0.658947C126.498 0.494844 125.558 0.699627 124.798 1.22825C124.037 1.75686 123.518 2.56602 123.353 3.4777C123.189 4.38938 123.394 5.32891 123.923 6.0896C124.451 6.8503 125.26 7.36984 126.172 7.53395C140.747 9.6652 150.922 17.8464 150.922 26.9214C150.922 38.1277 135.178 47.5464 116.547 47.5464C110.752 47.5668 104.992 46.6378 99.4972 44.7964C99.0869 44.6103 98.6415 44.5141 98.1909 44.5141C97.7404 44.5141 97.295 44.6103 96.8847 44.7964L83.8909 51.6714L86.8472 39.6402C86.9861 39.1021 86.9897 38.5381 86.8578 37.9983C86.7258 37.4585 86.4624 36.9598 86.0909 36.5464C83.6296 33.9394 82.2318 30.5063 82.1722 26.9214C82.1722 17.7089 92.8972 9.32145 107.61 6.9152C108.518 6.76318 109.331 6.25964 109.871 5.51346C110.411 4.76728 110.636 3.83842 110.497 2.9277C110.345 2.01905 109.842 1.20674 109.095 0.666405C108.349 0.126067 107.42 -0.0988811 106.51 0.0401975C88.1534 3.0652 75.2972 13.7902 75.2972 26.8527C75.3506 31.4259 76.9226 35.8517 79.7659 39.4339L75.2972 57.1027Z"
          fill="#FF7152"
        />
        <path
          d="M108.985 24.1715L111.666 26.9215L108.985 29.6027C108.33 30.2599 107.962 31.1499 107.962 32.0777C107.962 33.0055 108.33 33.8955 108.985 34.5527C109.636 35.1667 110.497 35.5087 111.391 35.5087C112.286 35.5087 113.147 35.1667 113.797 34.5527L116.547 31.8027L119.297 34.5527C119.948 35.1667 120.809 35.5087 121.704 35.5087C122.598 35.5087 123.459 35.1667 124.11 34.5527C124.765 33.8955 125.133 33.0055 125.133 32.0777C125.133 31.1499 124.765 30.2599 124.11 29.6027L121.429 26.9215L124.11 24.1715C124.432 23.8519 124.688 23.4717 124.862 23.0528C125.037 22.6339 125.127 22.1846 125.127 21.7309C125.127 21.2771 125.037 20.8278 124.862 20.4089C124.688 19.99 124.432 19.6098 124.11 19.2902C123.801 18.9614 123.429 18.6993 123.015 18.5201C122.601 18.341 122.155 18.2485 121.704 18.2485C121.253 18.2485 120.807 18.341 120.393 18.5201C119.979 18.6993 119.606 18.9614 119.297 19.2902L116.547 22.0402L113.797 19.2902C113.489 18.9614 113.116 18.6993 112.702 18.5201C112.288 18.341 111.842 18.2485 111.391 18.2485C110.94 18.2485 110.494 18.341 110.08 18.5201C109.666 18.6993 109.294 18.9614 108.985 19.2902C108.663 19.6098 108.407 19.99 108.233 20.4089C108.058 20.8278 107.968 21.2771 107.968 21.7309C107.968 22.1846 108.058 22.6339 108.233 23.0528C108.407 23.4717 108.663 23.8519 108.985 24.1715Z"
          fill="#FF7152"
        />
      </svg>
    </div>
  );
}

export default NotResult;
