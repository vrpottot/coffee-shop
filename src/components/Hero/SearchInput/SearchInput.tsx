import { useState } from 'react';
import { Button } from '../../../UI-kit/Button/Button';
import { SearchFilterButton } from '../../../UI-kit/searchbtn/SearchBtn';
import { Calendar } from '../../Calendar';
import './SearchInput.css';
import { CountPeople } from '../../CountPeople';
import { PopularPlaces } from '../../PopularPlaces/PopularPlaces';
import { PopularPlaceCard } from '../../PopularPlaces/PopularPlaceCard/PopularPlaceCard';
import { PopularPlace } from '../../PopularPlace';

interface SearchInputProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  onSearch,
  children,
  className,
}: SearchInputProps) => {

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCounterOpen, setIsCounterOpen] = useState(false);
  const [isPlacesOpen, setIsPlacesOpen] = useState(false);

  const openPlaces = () => {
    setIsPlacesOpen(!isPlacesOpen);
    setIsCalendarOpen(false);
    setIsCounterOpen(false);
  }

  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setIsCounterOpen(false);
    setIsPlacesOpen(false);
  }

  const openCounter = () => {
    setIsCounterOpen(!isCounterOpen);
    setIsCalendarOpen(false);
    setIsPlacesOpen(false);
  }

  return (
    <div className={`inputRoot ${className ?? ''}`}>
      <div className="searchInputForm">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3442_21877)">
            <path
              d="M25.9583 24.6545L20.1872 18.8846C21.8599 16.8765 22.694 14.3007 22.516 11.6933C22.338 9.08581 21.1615 6.64735 19.2314 4.88516C17.3013 3.12297 14.7662 2.17274 12.1533 2.23212C9.54044 2.2915 7.05106 3.35593 5.203 5.20398C3.35495 7.05203 2.29052 9.54142 2.23114 12.1543C2.17176 14.7671 3.122 17.3023 4.88418 19.2324C6.64637 21.1625 9.08483 22.3389 11.6923 22.517C14.2998 22.695 16.8755 21.8609 18.8837 20.1882L24.6536 25.9593C24.7392 26.0449 24.8409 26.1129 24.9529 26.1593C25.0648 26.2056 25.1848 26.2295 25.3059 26.2295C25.4271 26.2295 25.5471 26.2056 25.659 26.1593C25.7709 26.1129 25.8726 26.0449 25.9583 25.9593C26.044 25.8736 26.1119 25.7719 26.1583 25.66C26.2047 25.548 26.2285 25.4281 26.2285 25.3069C26.2285 25.1857 26.2047 25.0658 26.1583 24.9538C26.1119 24.8419 26.044 24.7402 25.9583 24.6545ZM4.09815 12.3978C4.09815 10.7565 4.58486 9.15202 5.49673 7.78731C6.4086 6.4226 7.70468 5.35893 9.22107 4.73082C10.7375 4.10271 12.406 3.93837 14.0158 4.25858C15.6256 4.57879 17.1043 5.36916 18.2649 6.52975C19.4255 7.69035 20.2159 9.16903 20.5361 10.7788C20.8563 12.3886 20.6919 14.0572 20.0638 15.5736C19.4357 17.09 18.3721 18.3861 17.0074 19.2979C15.6426 20.2098 14.0382 20.6965 12.3968 20.6965C10.1966 20.6941 8.08725 19.819 6.53147 18.2632C4.97569 16.7074 4.10059 14.598 4.09815 12.3978Z"
              fill="#111111"
            />
          </g>
          <defs>
            <clipPath id="clip0_3442_21877">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="inputWrapper"
          style={{ '--placeholder-length': `${placeholder.length}ch` } as React.CSSProperties}
        >
          <input
            className="searchInput"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onClick={openPlaces}
          />
          <div className='popularPlace'>
            {isPlacesOpen && (
              <PopularPlace />
            )}
          </div>
        </div>

        <div className="filters">
          <SearchFilterButton onClick={openCalendar} className="whenButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
              <path d="M7.41797 0.75V5.63889M18.0846 0.75V5.63889" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.0833 3.19434H3.41667C1.94391 3.19434 0.75 4.28875 0.75 5.63878V22.7499C0.75 24.0999 1.94391 25.1943 3.41667 25.1943H22.0833C23.5561 25.1943 24.75 24.0999 24.75 22.7499V5.63878C24.75 4.28875 23.5561 3.19434 22.0833 3.19434Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M0.75 10.5273H24.75" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span>Когда?</span>
          </SearchFilterButton>
          {isCalendarOpen && (
            <div className='calendar'>
              <Calendar />
            </div>
          )}
          <span className="filterButton" />
          <SearchFilterButton onClick={openCounter} className="whenButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" >
              <path d="M12.5872 15.0252C13.7599 14.2444 14.6502 13.107 15.1265 11.7812C15.6028 10.4553 15.6398 9.01132 15.232 7.66281C14.8241 6.31429 13.9932 5.13282 12.8619 4.2931C11.7307 3.45338 10.3593 3 8.95043 3C7.5416 3 6.17016 3.45338 5.03893 4.2931C3.9077 5.13282 3.07673 6.31429 2.66891 7.66281C2.26108 9.01132 2.29805 10.4553 2.77435 11.7812C3.25065 13.107 4.14099 14.2444 5.31371 15.0252C3.19238 15.807 1.3807 17.2538 0.149026 19.1497C0.0842937 19.2459 0.0393302 19.354 0.0167497 19.4678C-0.00583087 19.5815 -0.00557805 19.6986 0.0174934 19.8122C0.0405649 19.9259 0.0859948 20.0338 0.151142 20.1297C0.21629 20.2257 0.299856 20.3077 0.396982 20.371C0.494109 20.4344 0.602859 20.4778 0.71691 20.4987C0.830962 20.5197 0.948041 20.5178 1.06134 20.4931C1.17464 20.4684 1.2819 20.4214 1.37689 20.3549C1.47188 20.2884 1.5527 20.2037 1.61465 20.1056C2.40914 18.8837 3.49629 17.8795 4.77738 17.1844C6.05847 16.4893 7.49291 16.1252 8.95043 16.1252C10.408 16.1252 11.8424 16.4893 13.1235 17.1844C14.4046 17.8795 15.4917 18.8837 16.2862 20.1056C16.4146 20.2964 16.6128 20.4289 16.8381 20.4747C17.0634 20.5204 17.2976 20.4757 17.4902 20.3501C17.6828 20.2245 17.8182 20.0281 17.8671 19.8035C17.9161 19.5789 17.8747 19.344 17.7518 19.1497C16.5202 17.2538 14.7085 15.807 12.5872 15.0252ZM4.13793 9.56516C4.13793 8.61334 4.42018 7.68289 4.94899 6.89148C5.47779 6.10007 6.2294 5.48324 7.10877 5.11899C7.98814 4.75475 8.95577 4.65944 9.88931 4.84513C10.8228 5.03083 11.6803 5.48917 12.3534 6.16221C13.0264 6.83525 13.4848 7.69276 13.6705 8.62629C13.8562 9.55982 13.7608 10.5275 13.3966 11.4068C13.0324 12.2862 12.4155 13.0378 11.6241 13.5666C10.8327 14.0954 9.90226 14.3777 8.95043 14.3777C7.67452 14.3762 6.45129 13.8687 5.54908 12.9665C4.64687 12.0643 4.13938 10.8411 4.13793 9.56516ZM27.122 20.3605C26.9276 20.4872 26.6909 20.5316 26.4638 20.4838C26.2368 20.436 26.038 20.3 25.9112 20.1056C25.1177 18.8829 24.0307 17.8784 22.7493 17.1835C21.468 16.4887 20.0331 16.1257 18.5754 16.1277C18.3434 16.1277 18.1208 16.0355 17.9567 15.8714C17.7926 15.7073 17.7004 15.4847 17.7004 15.2527C17.7004 15.0206 17.7926 14.798 17.9567 14.6339C18.1208 14.4698 18.3434 14.3777 18.5754 14.3777C19.2841 14.377 19.984 14.2198 20.6249 13.9173C21.2658 13.6148 21.832 13.1745 22.2831 12.6279C22.7341 12.0812 23.0588 11.4416 23.234 10.7549C23.4092 10.0682 23.4306 9.35126 23.2966 8.65532C23.1626 7.95939 22.8766 7.30164 22.4589 6.72906C22.0413 6.15649 21.5023 5.68323 20.8805 5.34311C20.2588 5.00298 19.5695 4.80437 18.8621 4.76148C18.1547 4.7186 17.4465 4.83248 16.7882 5.09501C16.6809 5.14141 16.5654 5.16582 16.4484 5.16681C16.3315 5.1678 16.2156 5.14534 16.1075 5.10076C15.9994 5.05618 15.9013 4.99039 15.819 4.90726C15.7368 4.82414 15.6721 4.72538 15.6286 4.61681C15.5852 4.50824 15.564 4.39206 15.5662 4.27515C15.5684 4.15824 15.5941 4.04296 15.6416 3.93613C15.6891 3.82929 15.7576 3.73307 15.843 3.65314C15.9283 3.57322 16.0288 3.51121 16.1386 3.47079C17.6452 2.86994 19.3209 2.84832 20.8425 3.41009C22.3641 3.97187 23.6237 5.07724 24.3784 6.51296C25.1331 7.94868 25.3294 9.61303 24.9294 11.1849C24.5293 12.7568 23.5613 14.1249 22.2122 15.0252C24.3335 15.807 26.1452 17.2538 27.3768 19.1497C27.5036 19.3441 27.5479 19.5808 27.5001 19.8079C27.4524 20.0349 27.3163 20.2337 27.122 20.3605Z" fill="#8F8F8F" />
            </svg>
            <span> Кто едет?</span>
          </SearchFilterButton>
          {isCounterOpen && (
            <div className='counter'>
              <CountPeople count={0} onIncrement={function (): void {
                throw new Error('Function not implemented.');
              }} onDecrement={function (): void {
                throw new Error('Function not implemented.');
              }} />
            </div>
          )}
        </div>

        <Button
          appearance="primary"
          size="small"
          type="button"
          className="searchButton"
          onClick={onSearch}
        >
          Поиск
        </Button>
        {children && <div className="actions">{children}</div>}
      </div>
    </div>
  );
};