export function SearchIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43207 2.04543 6.24275 2.98757 4.61517 4.61515C2.98759 6.24273 2.04546 8.43204 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8481 21.6171 21.7737 21.71 21.68C21.8903 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9922 4.13453 9.63437C4.40463 8.2765 5.07131 7.02922 6.05028 6.05026C7.02925 5.07129 8.27653 4.4046 9.63439 4.13451C10.9923 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#878787"/>
        </svg>
    );
}


type HeartIconProps = {
    isSelected?: boolean;
};

export function HeartIcon({
    isSelected = true,
}: HeartIconProps) {
    return (
        <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 54.095H29.965C23.5075 53.975 4.87503 37.14 4.87503 21.195C4.87503 13.535 11.1875 6.81 18.3825 6.81C24.1075 6.81 27.9575 10.76 29.9975 13.635C32.0325 10.765 35.8825 6.81 41.61 6.81C48.81 6.81 55.12 13.535 55.12 21.1975C55.12 37.1375 36.485 53.9725 30.0275 54.09H30V54.095Z" fill={isSelected ? "white": 'none'}/>
            <path d="M30 54.095H29.965C23.5075 53.975 4.87503 37.14 4.87503 21.195C4.87503 13.535 11.1875 6.81 18.3825 6.81C24.1075 6.81 27.9575 10.76 29.9975 13.635C32.0325 10.765 35.8825 6.81 41.61 6.81C48.81 6.81 55.12 13.535 55.12 21.1975C55.12 37.1375 36.485 53.9725 30.0275 54.09H30V54.095ZM18.385 10.5625C13.185 10.5625 8.62753 15.5325 8.62753 21.2C8.62753 35.55 26.2125 50.19 30.0025 50.345C33.7975 50.19 51.3775 35.5525 51.3775 21.2C51.3775 15.5325 46.82 10.5625 41.62 10.5625C35.3 10.5625 31.77 17.9025 31.74 17.975C31.165 19.38 28.85 19.38 28.2725 17.975C28.2375 17.9 24.7075 10.5625 18.385 10.5625Z" fill="white" stroke="white" stroke-width="0.520833"/>
        </svg>
    );
}


export function CopyIcon() {
    return (
        <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 22.5H27.5C24.7386 22.5 22.5 24.7386 22.5 27.5V50C22.5 52.7614 24.7386 55 27.5 55H50C52.7614 55 55 52.7614 55 50V27.5C55 24.7386 52.7614 22.5 50 22.5Z" fill="white" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 37.5H10C8.67392 37.5 7.40215 36.9732 6.46447 36.0355C5.52678 35.0978 5 33.8261 5 32.5V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H32.5C33.8261 5 35.0978 5.52678 36.0355 6.46447C36.9732 7.40215 37.5 8.67392 37.5 10V12.5" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}


export function DownloadIcon() {
    return (
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6667 16.6667L20 25L28.3333 16.6667" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 25V5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export function HeartIcon2() {
    return (
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" fill="#F9595F"/>
        </svg>
    );
}

export function Bitcoin() {
    return (
        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1.5C14.7366 1.5 11.5465 2.46771 8.8331 4.28075C6.11969 6.09379 4.00484 8.67074 2.756 11.6857C1.50715 14.7007 1.18039 18.0183 1.81705 21.219C2.45371 24.4197 4.02518 27.3597 6.33275 29.6673C8.64031 31.9748 11.5803 33.5463 14.781 34.183C17.9817 34.8196 21.2993 34.4929 24.3143 33.244C27.3293 31.9952 29.9062 29.8803 31.7193 27.1669C33.5323 24.4535 34.5 21.2634 34.5 18C34.5 13.6239 32.7616 9.42709 29.6673 6.33274C26.5729 3.23839 22.3761 1.5 18 1.5V1.5ZM18 31.5C15.33 31.5 12.7199 30.7082 10.4998 29.2248C8.27975 27.7414 6.54942 25.633 5.52763 23.1662C4.50585 20.6994 4.23851 17.985 4.75941 15.3663C5.28031 12.7475 6.56606 10.3421 8.45407 8.45406C10.3421 6.56605 12.7475 5.2803 15.3663 4.7594C17.985 4.2385 20.6994 4.50584 23.1662 5.52763C25.633 6.54941 27.7414 8.27974 29.2248 10.4998C30.7082 12.7199 31.5 15.33 31.5 18C31.5 21.5804 30.0777 25.0142 27.5459 27.5459C25.0142 30.0777 21.5804 31.5 18 31.5V31.5ZM21 10.5V9C21 8.60218 20.842 8.22065 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5C19.1022 7.5 18.7207 7.65804 18.4393 7.93934C18.158 8.22065 18 8.60218 18 9V10.5H16.5V9C16.5 8.60218 16.342 8.22065 16.0607 7.93934C15.7794 7.65804 15.3978 7.5 15 7.5C14.6022 7.5 14.2207 7.65804 13.9393 7.93934C13.658 8.22065 13.5 8.60218 13.5 9V10.5H12C11.6022 10.5 11.2207 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2207 13.342 11.6022 13.5 12 13.5H13.5V22.5H12C11.6022 22.5 11.2207 22.658 10.9393 22.9393C10.658 23.2206 10.5 23.6022 10.5 24C10.5 24.3978 10.658 24.7794 10.9393 25.0607C11.2207 25.342 11.6022 25.5 12 25.5H13.5V27C13.5 27.3978 13.658 27.7794 13.9393 28.0607C14.2207 28.342 14.6022 28.5 15 28.5C15.3978 28.5 15.7794 28.342 16.0607 28.0607C16.342 27.7794 16.5 27.3978 16.5 27V25.5H18V27C18 27.3978 18.158 27.7794 18.4393 28.0607C18.7207 28.342 19.1022 28.5 19.5 28.5C19.8978 28.5 20.2794 28.342 20.5607 28.0607C20.842 27.7794 21 27.3978 21 27V25.5C22.1935 25.5 23.3381 25.0259 24.182 24.182C25.0259 23.3381 25.5 22.1935 25.5 21C25.4975 19.8919 25.0862 18.8237 24.345 18C25.0862 17.1763 25.4975 16.1081 25.5 15C25.5 13.8065 25.0259 12.6619 24.182 11.818C23.3381 10.9741 22.1935 10.5 21 10.5V10.5ZM21 22.5H16.5V19.5H21C21.3978 19.5 21.7794 19.658 22.0607 19.9393C22.342 20.2206 22.5 20.6022 22.5 21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5ZM21 16.5H16.5V13.5H21C21.3978 13.5 21.7794 13.658 22.0607 13.9393C22.342 14.2206 22.5 14.6022 22.5 15C22.5 15.3978 22.342 15.7794 22.0607 16.0607C21.7794 16.342 21.3978 16.5 21 16.5Z" fill="#FE983B"/>
        </svg>
    );
}

export function Bulb() {
    return (
        <svg fill="#00ffe1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
            <path d="M 6.5292969 2.515625 A 1 1 0 0 0 5.8085938 2.8085938 A 1 1 0 0 0 5.8085938 4.2226562 A 1 1 0 0 0 7.2226562 4.2226562 A 1 1 0 0 0 7.2226562 2.8085938 A 1 1 0 0 0 6.5292969 2.515625 z M 23.5 2.515625 A 1 1 0 0 0 22.777344 2.8085938 A 1 1 0 0 0 22.777344 4.2226562 A 1 1 0 0 0 24.191406 4.2226562 A 1 1 0 0 0 24.191406 2.8085938 A 1 1 0 0 0 23.5 2.515625 z M 15 3 C 10.029 3 6 7.029 6 12 C 6 17 10 19 12 23 L 18 23 C 20 19 24 17 24 12 C 24 7.029 19.971 3 15 3 z M 15 6 L 15 11 L 19 11 L 15 18 L 15 13 L 11 13 L 15 6 z M 3 11 A 1 1 0 0 0 2 12 A 1 1 0 0 0 3 13 A 1 1 0 0 0 4 12 A 1 1 0 0 0 3 11 z M 27 11 A 1 1 0 0 0 26 12 A 1 1 0 0 0 27 13 A 1 1 0 0 0 28 12 A 1 1 0 0 0 27 11 z M 6.5292969 19.484375 A 1 1 0 0 0 5.8066406 19.777344 A 1 1 0 0 0 5.8066406 21.191406 A 1 1 0 0 0 7.2226562 21.191406 A 1 1 0 0 0 7.2226562 19.777344 A 1 1 0 0 0 6.5292969 19.484375 z M 23.498047 19.486328 A 1 1 0 0 0 22.777344 19.777344 A 1 1 0 0 0 22.777344 21.193359 A 1 1 0 0 0 24.191406 21.193359 A 1 1 0 0 0 24.191406 19.777344 A 1 1 0 0 0 23.498047 19.486328 z M 12 25 L 12 26 C 12 27.105 12.895 28 14 28 A 1 1 0 0 0 15 29 A 1 1 0 0 0 16 28 C 17.105 28 18 27.105 18 26 L 18 25 L 12 25 z"/>
        </svg>
    );
}

export function VerificationCheck() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 13 12"
            fill="#ca077c"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.50941 0L9.53314 1.94972L11.759 2.29179L11.4059 4.4533L13 6.00021L11.4061 7.54734L11.7585 9.7082L9.53201 10.0503L8.50838 12L6.4994 11.0066L4.49194 11.9996L3.46887 10.0502L1.24134 9.70816L1.59414 7.5473L0 6.00038L1.59392 4.45325L1.24147 2.29239L3.46783 1.94984L4.49111 0.000754215L6.49943 0.993864L8.50941 0ZM4.11667 5.72772L3.25 6.60044L5.41667 8.78226L9.75 4.41863L8.88333 3.5459L5.41667 7.03681L4.11667 5.72772Z"
            fill="#ca077c"
            />
        </svg>
    );
}

export function Relays() {
    return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9999 10.9999H9.99989C9.73467 10.9999 9.48032 11.1053 9.29278 11.2928C9.10525 11.4803 8.99989 11.7347 8.99989 11.9999V19.9999C8.99962 20.1816 9.04884 20.3599 9.14227 20.5157C9.23569 20.6715 9.3698 20.7989 9.53018 20.8842C9.69056 20.9696 9.87116 21.0096 10.0526 21C10.234 20.9904 10.4094 20.9316 10.5599 20.8299L12.4999 19.5299L14.3899 20.7899C14.5644 20.9254 14.7789 20.9992 14.9999 20.9999C15.1523 21.0005 15.3028 20.9663 15.4399 20.8999C15.6082 20.8174 15.7499 20.6893 15.8489 20.5302C15.948 20.3711 16.0003 20.1873 15.9999 19.9999V11.9999C15.9999 11.7347 15.8945 11.4803 15.707 11.2928C15.5195 11.1053 15.2651 10.9999 14.9999 10.9999ZM13.9999 18.1199L13.0599 17.4899C12.8945 17.3781 12.6995 17.3184 12.4999 17.3184C12.3003 17.3184 12.1053 17.3781 11.9399 17.4899L10.9999 18.1299V12.9999H13.9999V18.1199ZM18.4199 7.21989C17.8089 5.8159 16.7544 4.65097 15.418 3.90362C14.0815 3.15627 12.5369 2.86773 11.0209 3.0822C9.50477 3.29668 8.10082 4.00235 7.02415 5.09107C5.94747 6.17979 5.25748 7.59151 5.05989 9.10989C4.10648 9.33822 3.27011 9.90873 2.70963 10.7131C2.14914 11.5174 1.90357 12.4996 2.01955 13.4731C2.13553 14.4466 2.60498 15.3436 3.33876 15.9938C4.07253 16.6439 5.01952 17.002 5.99989 16.9999C6.26511 16.9999 6.51946 16.8945 6.707 16.707C6.89453 16.5195 6.99989 16.2651 6.99989 15.9999C6.99989 15.7347 6.89453 15.4803 6.707 15.2928C6.51946 15.1053 6.26511 14.9999 5.99989 14.9999C5.46946 14.9999 4.96075 14.7892 4.58568 14.4141C4.2106 14.039 3.99989 13.5303 3.99989 12.9999C3.99989 12.4695 4.2106 11.9608 4.58568 11.5857C4.96075 11.2106 5.46946 10.9999 5.99989 10.9999C6.26511 10.9999 6.51946 10.8945 6.707 10.707C6.89453 10.5195 6.99989 10.2651 6.99989 9.99989C7.00244 8.81717 7.42418 7.67365 8.19016 6.77248C8.95614 5.87131 10.0168 5.27085 11.1836 5.07777C12.3505 4.88469 13.548 5.1115 14.5635 5.7179C15.5789 6.32431 16.3465 7.27103 16.7299 8.38989C16.7871 8.56173 16.8898 8.71483 17.0272 8.83283C17.1646 8.95083 17.3314 9.02931 17.5099 9.0599C18.1112 9.16874 18.665 9.45863 19.0971 9.89078C19.5292 10.3229 19.819 10.8767 19.9277 11.4781C20.0364 12.0794 19.9589 12.6997 19.7056 13.2558C19.4522 13.8119 19.035 14.2774 18.5099 14.5899C18.2792 14.7225 18.1105 14.9413 18.0412 15.1983C17.9718 15.4552 18.0073 15.7292 18.1399 15.9599C18.2725 16.1906 18.4913 16.3592 18.7483 16.4286C19.0052 16.498 19.2792 16.4625 19.5099 16.3299C20.2681 15.8898 20.8973 15.2581 21.3343 14.4981C21.7714 13.7381 22.0009 12.8766 21.9999 11.9999C21.9969 10.924 21.6469 9.87783 21.0019 9.0167C20.357 8.15557 19.4515 7.52544 18.4199 7.21989Z" fill="#FFF"/>
        </svg>
    );
}

export function Close() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z" fill="#848484"/>
        </svg>
    );
}

export function Delete() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19ZM14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z" fill="#FE3B3B"/>
        </svg>
    );
}

export function Plus() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#FFFFFF"/>
        </svg>
    );
}

export function QuestionMark() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4083 12.7417C9.37246 12.7813 9.33906 12.823 9.3083 12.8667C9.27676 12.9131 9.25154 12.9636 9.2333 13.0167C9.20927 13.0639 9.19242 13.1145 9.1833 13.1667C9.17921 13.2222 9.17921 13.2779 9.1833 13.3333C9.18048 13.4427 9.20331 13.5511 9.24996 13.65C9.28739 13.7534 9.3471 13.8473 9.42487 13.9251C9.50263 14.0029 9.59655 14.0626 9.69996 14.1C9.79971 14.1441 9.90757 14.1669 10.0166 14.1669C10.1257 14.1669 10.2335 14.1441 10.3333 14.1C10.4367 14.0626 10.5306 14.0029 10.6084 13.9251C10.6862 13.8473 10.7459 13.7534 10.7833 13.65C10.8203 13.5487 10.8373 13.4411 10.8333 13.3333C10.8339 13.2237 10.8129 13.1149 10.7714 13.0134C10.73 12.9119 10.6689 12.8195 10.5916 12.7417C10.5142 12.6636 10.422 12.6016 10.3204 12.5593C10.2189 12.517 10.11 12.4952 9.99996 12.4952C9.88995 12.4952 9.78103 12.517 9.67948 12.5593C9.57793 12.6016 9.48576 12.6636 9.4083 12.7417ZM9.99996 1.66667C8.35179 1.66667 6.74062 2.15541 5.37021 3.07109C3.9998 3.98677 2.9317 5.28826 2.30097 6.81098C1.67024 8.33369 1.50521 10.0092 1.82675 11.6258C2.1483 13.2423 2.94197 14.7271 4.10741 15.8926C5.27284 17.058 6.7577 17.8517 8.37421 18.1732C9.99072 18.4948 11.6663 18.3297 13.189 17.699C14.7117 17.0683 16.0132 16.0002 16.9289 14.6298C17.8446 13.2593 18.3333 11.6482 18.3333 10C18.3333 8.90566 18.1177 7.82202 17.699 6.81098C17.2802 5.79993 16.6663 4.88127 15.8925 4.10745C15.1187 3.33363 14.2 2.7198 13.189 2.30101C12.1779 1.88222 11.0943 1.66667 9.99996 1.66667ZM9.99996 16.6667C8.68142 16.6667 7.39249 16.2757 6.29616 15.5431C5.19983 14.8106 4.34535 13.7694 3.84077 12.5512C3.33618 11.3331 3.20416 9.99261 3.46139 8.6994C3.71863 7.4062 4.35357 6.21831 5.28592 5.28596C6.21827 4.35361 7.40615 3.71867 8.69936 3.46144C9.99257 3.2042 11.333 3.33622 12.5512 3.84081C13.7694 4.34539 14.8105 5.19988 15.5431 6.2962C16.2756 7.39253 16.6666 8.68146 16.6666 10C16.6666 11.7681 15.9642 13.4638 14.714 14.714C13.4638 15.9643 11.7681 16.6667 9.99996 16.6667ZM9.99996 5.83334C9.56085 5.83306 9.12941 5.94844 8.74905 6.16787C8.3687 6.38731 8.05285 6.70305 7.8333 7.08334C7.773 7.17819 7.73252 7.28425 7.71427 7.39515C7.69603 7.50605 7.70041 7.6195 7.72715 7.72866C7.75389 7.83782 7.80244 7.94045 7.86987 8.03037C7.9373 8.12028 8.02222 8.19563 8.11952 8.25187C8.21683 8.30812 8.3245 8.3441 8.43607 8.35765C8.54764 8.37121 8.6608 8.36205 8.76874 8.33074C8.87668 8.29942 8.97717 8.2466 9.06417 8.17544C9.15116 8.10428 9.22287 8.01626 9.27496 7.91667C9.34838 7.7895 9.4541 7.68399 9.58142 7.61082C9.70873 7.53765 9.85312 7.49942 9.99996 7.5C10.221 7.5 10.4329 7.5878 10.5892 7.74408C10.7455 7.90036 10.8333 8.11232 10.8333 8.33334C10.8333 8.55435 10.7455 8.76631 10.5892 8.92259C10.4329 9.07887 10.221 9.16667 9.99996 9.16667C9.77895 9.16667 9.56699 9.25447 9.41071 9.41075C9.25443 9.56703 9.16663 9.77899 9.16663 10V10.8333C9.16663 11.0544 9.25443 11.2663 9.41071 11.4226C9.56699 11.5789 9.77895 11.6667 9.99996 11.6667C10.221 11.6667 10.4329 11.5789 10.5892 11.4226C10.7455 11.2663 10.8333 11.0544 10.8333 10.8333V10.6833C11.3844 10.4834 11.8478 10.096 12.1423 9.58906C12.4368 9.0821 12.5437 8.48775 12.4445 7.90991C12.3452 7.33208 12.046 6.80752 11.5991 6.42793C11.1523 6.04835 10.5862 5.83789 9.99996 5.83334Z" fill="#4C9EFF"/>
        </svg>
    );
}

export function Mail() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6666 9.59165H13.6833C13.793 9.59229 13.9017 9.57127 14.0032 9.5298C14.1047 9.48833 14.1971 9.42722 14.275 9.34999L18.0916 5.53332C18.1697 5.45585 18.2317 5.36368 18.274 5.26214C18.3163 5.16059 18.3381 5.05166 18.3381 4.94165C18.3381 4.83164 18.3163 4.72272 18.274 4.62117C18.2317 4.51962 18.1697 4.42746 18.0916 4.34999L16.075 2.33332C15.9975 2.25521 15.9053 2.19322 15.8038 2.15091C15.7022 2.1086 15.5933 2.08682 15.4833 2.08682C15.3733 2.08682 15.2644 2.1086 15.1628 2.15091C15.0613 2.19322 14.9691 2.25521 14.8916 2.33332L11.075 6.14999C10.9227 6.30968 10.8364 6.52102 10.8333 6.74165V8.75832C10.8333 8.97933 10.9211 9.1913 11.0774 9.34758C11.2337 9.50386 11.4456 9.59165 11.6666 9.59165ZM12.5 7.09165L15.4833 4.10832L16.3166 4.94165L13.3333 7.92499H12.5V7.09165ZM17.5 8.75832C17.2789 8.75832 17.067 8.84612 16.9107 9.0024C16.7544 9.15868 16.6666 9.37064 16.6666 9.59165V15.425C16.6666 15.646 16.5788 15.858 16.4225 16.0142C16.2663 16.1705 16.0543 16.2583 15.8333 16.2583H4.16663C3.94561 16.2583 3.73365 16.1705 3.57737 16.0142C3.42109 15.858 3.33329 15.646 3.33329 15.425V7.41665L8.23329 12.325C8.46585 12.5606 8.74287 12.7476 9.04829 12.8753C9.3537 13.003 9.68143 13.0687 10.0125 13.0687C10.3435 13.0687 10.6712 13.003 10.9766 12.8753C11.2821 12.7476 11.5591 12.5606 11.7916 12.325C11.9443 12.1692 12.0298 11.9598 12.0298 11.7417C12.0298 11.5235 11.9443 11.3141 11.7916 11.1583C11.714 11.0789 11.6213 11.0159 11.519 10.9728C11.4167 10.9298 11.3068 10.9076 11.1958 10.9076C11.0848 10.9076 10.9749 10.9298 10.8726 10.9728C10.7703 11.0159 10.6776 11.0789 10.6 11.1583C10.4442 11.311 10.2348 11.3965 10.0166 11.3965C9.7985 11.3965 9.58907 11.311 9.43329 11.1583L4.50829 6.24165H8.33329C8.55431 6.24165 8.76627 6.15386 8.92255 5.99758C9.07883 5.8413 9.16663 5.62933 9.16663 5.40832C9.16663 5.18731 9.07883 4.97535 8.92255 4.81907C8.76627 4.66279 8.55431 4.57499 8.33329 4.57499H4.16663C3.50358 4.57499 2.8677 4.83838 2.39886 5.30722C1.93002 5.77606 1.66663 6.41195 1.66663 7.07499V15.4083C1.66663 16.0714 1.93002 16.7072 2.39886 17.1761C2.8677 17.6449 3.50358 17.9083 4.16663 17.9083H15.8333C16.4963 17.9083 17.1322 17.6449 17.6011 17.1761C18.0699 16.7072 18.3333 16.0714 18.3333 15.4083V9.57499C18.3333 9.35397 18.2455 9.14201 18.0892 8.98573C17.9329 8.82945 17.721 8.74165 17.5 8.74165V8.75832Z" fill="#CE66FF"/>
        </svg>
    );
}

export function Github() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z" fill="#FFF"/>
        </svg>
    );
}

export function NostrichHead({
    fill,
}: { fill: string }) {
    return (
        <svg width="24" height="24" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 24.4076V53.9817C56 55.0939 55.1041 55.9964 54.0001 55.9964H30.0016C28.8977 55.9964 28.0018 55.0939 28.0018 53.9817V48.4741C28.1111 41.7228 28.8201 35.2558 30.3085 32.3137C31.2009 30.5442 32.6717 29.5812 34.3612 29.066C37.5532 28.0995 43.1543 28.7604 45.5315 28.6467C45.5315 28.6467 52.7127 28.9345 52.7127 24.8376C52.7127 21.5401 49.5031 21.7995 49.5031 21.7995C45.9654 21.8919 43.2706 21.6503 41.5247 20.9574C38.6007 19.799 38.502 17.6741 38.4914 16.9635C38.3468 8.75533 26.3334 7.77107 15.7486 9.80711C4.1761 12.0244 15.8755 28.7355 15.8755 51.0431V54.0208C15.8544 55.1152 14.9761 56 13.8827 56H1.99987C0.895887 56 0 55.0975 0 53.9853V2.83553C0 1.72335 0.895887 0.820813 1.99987 0.820813H13.1702C14.2742 0.820813 15.1701 1.72335 15.1701 2.83553C15.1701 4.48782 17.0148 5.40812 18.3481 4.44518C22.3654 1.54569 27.5221 0 33.2924 0C46.2193 0 55.993 7.58985 55.993 24.4076H56ZM34.541 18.4061C34.541 16.0254 32.6258 14.0959 30.2626 14.0959C27.8995 14.0959 25.9843 16.0254 25.9843 18.4061C25.9843 20.7868 27.8995 22.7162 30.2626 22.7162C32.6258 22.7162 34.541 20.7868 34.541 18.4061Z" fill={fill}/>
        </svg>
    );
}
