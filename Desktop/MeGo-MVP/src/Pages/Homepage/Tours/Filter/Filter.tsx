import React, { useState, useRef, useEffect } from 'react'
import './Filter.css'
import DaysRangeSlider from './Slider/Slider';
import { Link } from 'react-router-dom';

interface FilterProps {
    showMapButton?: boolean;
    className?: string;
}

const Filter: React.FC<FilterProps> = ({ showMapButton = true, className = '' }) => {
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(2);

    const [fromPrice, setFromPrice] = useState(1);
    const [toPrice, setToPrice] = useState(2);

    // State for city checkboxes
    const [cityFilters, setCityFilters] = useState({
        uralsk: false,
        atyrau: false,
        aktobe: false,
        kostanay: false,
    });

    const [cityModalFilters, setCityModalFilters] = useState({
        petropavlsk: false,
        kokshetau: false,
        astana: false,
        pavlodar: false,
        ekibastuz: false,
        semey: false,
        ust_kamenogorsk: false,
        karaganda: false,
        zhezkazgan: false,
        kyzylorda: false,
        taraz: false,
        shymkent: false,
        taldykorgan: false,
        konaev: false,
        almaty: false,
    });

    // State for region checkboxes
    const [regionFilters, setRegionFilters] = useState({
        west_kazakhstan: false,
        atyrau_region: false,
        mangystau: false,
        aktobinskaya: false,
        kostanay_region: false,
        severo_kazakhstan: false,
        akmolinskaya: false,
        pavlodar: false,
        karaganda: false,
        ulytau: false,
        kyzylorda: false,
        zhambyl: false,
        turkestan: false,
        abai: false,
        vostochno_kazakhstan: false,
        zhetysu: false,
    });

    // State for place type checkboxes
    const [placeTypeFilters, setPlaceTypeFilters] = useState({
        natural: false,
        historic: false,
        cultural: false,
        urban: false,
        entertainment: false,
        viewing_platform: false,
    });

    // State for popularity checkboxes
    const [popularityFilters, setPopularityFilters] = useState({
        popular: false,
        recommended: false,
        new_places: false,
    });

    // State for seasonality checkboxes
    const [seasonalityFilters, setSeasonalityFilters] = useState({
        year_round: false,
        seasonal: false,
    });

    // State for suitability checkboxes
    const [suitabilityFilters, setSuitabilityFilters] = useState({
        beginners: false,
        no_special_prep: false,
        with_children_under3: false,
        with_children_4to6: false,
        with_children_under12: false,
    });

    // State for collapse/expand functionality
    const [collapsedSections, setCollapsedSections] = useState({
        duration: false,
        price: false,
        city: false,
        region: false,
        placeType: false,
        popularity: false,
        seasonality: false,
        suitability: false,
    });

    // State for dropdown modals
    const [showRegionDropdown, setShowRegionDropdown] = useState(false);
    const [showCityDropdown, setShowCityDropdown] = useState(false);

    const regionDropdownRef = useRef<HTMLDivElement>(null);
    const cityDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (regionDropdownRef.current && !regionDropdownRef.current.contains(event.target as Node)) {
                setShowRegionDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cityDropdownRef.current &&
                !cityDropdownRef.current.contains(event.target as Node)
            ) {
                setShowCityDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleSection = (section: keyof typeof collapsedSections) => {
        setCollapsedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const resetAllFilters = () => {
        // Reset duration slider
        setFrom(1);
        setTo(2);

        // Reset price slider
        setFromPrice(1);
        setToPrice(2);

        // Reset all checkbox filters
        setCityFilters({
            uralsk: false,
            atyrau: false,
            aktobe: false,
            kostanay: false,
        });

        setRegionFilters({
            west_kazakhstan: false,
            atyrau_region: false,
            mangystau: false,
            aktobinskaya: false,
            kostanay_region: false,
            severo_kazakhstan: false,
            akmolinskaya: false,
            pavlodar: false,
            karaganda: false,
            ulytau: false,
            kyzylorda: false,
            zhambyl: false,
            turkestan: false,
            abai: false,
            vostochno_kazakhstan: false,
            zhetysu: false,
        });

        setPlaceTypeFilters({
            natural: false,
            historic: false,
            cultural: false,
            urban: false,
            entertainment: false,
            viewing_platform: false,
        });

        setPopularityFilters({
            popular: false,
            recommended: false,
            new_places: false,
        });

        setSeasonalityFilters({
            year_round: false,
            seasonal: false,
        });

        setSuitabilityFilters({
            beginners: false,
            no_special_prep: false,
            with_children_under3: false,
            with_children_4to6: false,
            with_children_under12: false,
        });

        // Also expand all sections when resetting
        setCollapsedSections({
            duration: false,
            price: false,
            city: false,
            region: false,
            placeType: false,
            popularity: false,
            seasonality: false,
            suitability: false,
        });
    };

    return (
        <div className={className}>
            <div className='container-filter'>
                {showMapButton && (
                    <div className='view-map'>
                        <Link to={'/map'}><button className='map-button'>Показать на карте</button></Link>
                    </div>
                )}

                <div className='all-filter'>
                    <div className='filter-title'>
                        <h1>Все фильтры</h1>
                        <button onClick={resetAllFilters}>Сбросить всё</button>
                    </div>


                    <div className='duration-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>

                        <div className='duration-title' onClick={() => toggleSection('duration')}>
                            <h3>Длительность</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.duration ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>

                        {!collapsedSections.duration && (
                            <div>
                                <div className='duration-hour'>
                                    <div className='quantity-hour'>
                                        <div className='from-hour'>
                                            <p>От (часов)</p>
                                            <span>{from}</span>
                                        </div>

                                        <div className='separator'></div>

                                        <div className='to-hour'>
                                            <p>До (дней)</p>
                                            <span>{to}</span>
                                        </div>
                                    </div>
                                    <div className='slider'>
                                        <DaysRangeSlider
                                            min={from}
                                            max={to}
                                            onChange={(min, max) => {
                                                setFrom(min);
                                                setTo(max);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className='duration-title' onClick={() => toggleSection('price')}>
                                    <h3>Цена</h3>
                                    <svg width="8" height="5" className={`arrow ${collapsedSections.price ? 'rotated' : ''}`}>
                                        <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                                    </svg>
                                </div>

                                {!collapsedSections.price && (
                                    <div>
                                        <div>
                                            <div className='quantity-hour'>
                                                <div className='from-hour'>
                                                    <p>От (часов)</p>
                                                    <span>{fromPrice}</span>
                                                </div>

                                                <div className='separator'></div>

                                                <div className='to-hour'>
                                                    <p>До (дней)</p>
                                                    <span>{toPrice}</span>
                                                </div>
                                            </div>
                                            <div className='slider'>
                                                <DaysRangeSlider
                                                    min={fromPrice}
                                                    max={toPrice}
                                                    onChange={(min, max) => {
                                                        setFromPrice(min);
                                                        setToPrice(max);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('city')}>
                            <h3>Город</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.city ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.city && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={cityFilters.uralsk}
                                        onChange={(e) => setCityFilters({ ...cityFilters, uralsk: e.target.checked })}
                                    />
                                    <p>Уральск</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={cityFilters.atyrau}
                                        onChange={(e) => setCityFilters({ ...cityFilters, atyrau: e.target.checked })}
                                    />
                                    <p>Атырау</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={cityFilters.aktobe}
                                        onChange={(e) => setCityFilters({ ...cityFilters, aktobe: e.target.checked })}
                                    />
                                    <p>Актобе</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={cityFilters.kostanay}
                                        onChange={(e) => setCityFilters({ ...cityFilters, kostanay: e.target.checked })}
                                    />
                                    <p>Костанай</p>
                                </div>
                            </div>
                        )}
                        {!collapsedSections.city && (
                            <>
                                <button onClick={() => setShowCityDropdown(!showCityDropdown)}>Смотреть всё</button>
                                {showCityDropdown && <div className="dropdown-modal-city" ref={cityDropdownRef}>
                                    <div className="dropdown-header">
                                        <h3>Все города</h3>
                                    </div>
                                    <div className="dropdown-content">
                                        <div className="dropdown-column">
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.petropavlsk}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, petropavlsk: e.target.checked })}
                                                />
                                                <p>Петропавловск</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.kokshetau}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, kokshetau: e.target.checked })}
                                                />
                                                <p>Кокшетау</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.astana}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, astana: e.target.checked })}
                                                />
                                                <p>Астана</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.pavlodar}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, pavlodar: e.target.checked })}
                                                />
                                                <p>Павлодар</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.ekibastuz}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, ekibastuz: e.target.checked })}
                                                />
                                                <p>Экибастуз</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.semey}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, semey: e.target.checked })}
                                                />
                                                <p>Семей</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.ust_kamenogorsk}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, ust_kamenogorsk: e.target.checked })}
                                                />
                                                <p>Усть-Каменогорск</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.karaganda}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, karaganda: e.target.checked })}
                                                />
                                                <p>Караганда</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.zhezkazgan}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, zhezkazgan: e.target.checked })}
                                                />
                                                <p>Жезказган</p>
                                            </div>
                                        </div>
                                        <div className="dropdown-column">
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.karaganda}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, karaganda: e.target.checked })}
                                                />
                                                <p>Караганда</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.zhezkazgan}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, zhezkazgan: e.target.checked })}
                                                />
                                                <p>Жезказган</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.kyzylorda}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, kyzylorda: e.target.checked })}
                                                />
                                                <p>Кызылорда</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.taraz}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, taraz: e.target.checked })}
                                                />
                                                <p>Тараз</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.shymkent}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, shymkent: e.target.checked })}
                                                />
                                                <p>Шымкент</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.taldykorgan}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, taldykorgan: e.target.checked })}
                                                />
                                                <p>Талдыкорган</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.konaev}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, konaev: e.target.checked })}
                                                />
                                                <p>Конаев</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.almaty}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, almaty: e.target.checked })}
                                                />
                                                <p>Алматы</p>
                                            </div>
                                            <div className="city">
                                                <input
                                                    type="checkbox"
                                                    checked={cityModalFilters.ust_kamenogorsk}
                                                    onChange={(e) => setCityModalFilters({ ...cityModalFilters, ust_kamenogorsk: e.target.checked })}
                                                />
                                                <p>Усть-Каменогорск</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('region')}>
                            <h3>Область</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.region ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.region && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={regionFilters.west_kazakhstan}
                                        onChange={(e) => setRegionFilters({ ...regionFilters, west_kazakhstan: e.target.checked })}
                                    />
                                    <p>Западно-Казахстанская </p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={regionFilters.atyrau_region}
                                        onChange={(e) => setRegionFilters({ ...regionFilters, atyrau_region: e.target.checked })}
                                    />
                                    <p>Атырауская область</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={regionFilters.mangystau}
                                        onChange={(e) => setRegionFilters({ ...regionFilters, mangystau: e.target.checked })}
                                    />
                                    <p>Мангистауская </p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={regionFilters.aktobinskaya}
                                        onChange={(e) => setRegionFilters({ ...regionFilters, aktobinskaya: e.target.checked })}
                                    />
                                    <p>Актюбинская</p>
                                </div>
                            </div>
                        )}
                        {!collapsedSections.region && (
                            <>
                                <button onClick={() => setShowRegionDropdown(!showRegionDropdown)}>Смотреть всё</button>
                                {showRegionDropdown && (
                                    <div className="dropdown-modal" ref={regionDropdownRef}>
                                        <div className="dropdown-header">
                                            <h3>Все области</h3>
                                        </div>
                                        <div className="dropdown-content">
                                            <div className="dropdown-column">
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.kostanay_region}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, kostanay_region: e.target.checked })}
                                                    />
                                                    <p>Костанайская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.severo_kazakhstan}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, severo_kazakhstan: e.target.checked })}
                                                    />
                                                    <p>Северо-Казахстанская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.akmolinskaya}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, akmolinskaya: e.target.checked })}
                                                    />
                                                    <p>Акмолинская область</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.pavlodar}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, pavlodar: e.target.checked })}
                                                    />
                                                    <p>Павлодарская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.karaganda}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, karaganda: e.target.checked })}
                                                    />
                                                    <p>Карагандинская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.ulytau}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, ulytau: e.target.checked })}
                                                    />
                                                    <p>Улытауская</p>
                                                </div>
                                            </div>
                                            <div className="dropdown-column">
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.kyzylorda}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, kyzylorda: e.target.checked })}
                                                    />
                                                    <p>Кызылординская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.zhambyl}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, zhambyl: e.target.checked })}
                                                    />
                                                    <p>Жамбылская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.turkestan}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, turkestan: e.target.checked })}
                                                    />
                                                    <p>Туркестанская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.abai}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, abai: e.target.checked })}
                                                    />
                                                    <p>Абайская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.vostochno_kazakhstan}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, vostochno_kazakhstan: e.target.checked })}
                                                    />
                                                    <p>Восточно-Казахстанская</p>
                                                </div>
                                                <div className="city">
                                                    <input
                                                        type="checkbox"
                                                        checked={regionFilters.zhetysu}
                                                        onChange={(e) => setRegionFilters({ ...regionFilters, zhetysu: e.target.checked })}
                                                    />
                                                    <p>Жетысуская</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('placeType')}>
                            <h3>Тип места</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.placeType ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.placeType && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.natural}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, natural: e.target.checked })}
                                    />
                                    <p>Природное</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.historic}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, historic: e.target.checked })}
                                    />
                                    <p>Историческое</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.cultural}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, cultural: e.target.checked })}
                                    />
                                    <p>Культурное</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.urban}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, urban: e.target.checked })}
                                    />
                                    <p>Городское</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.entertainment}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, entertainment: e.target.checked })}
                                    />
                                    <p>Развлекательное</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={placeTypeFilters.viewing_platform}
                                        onChange={(e) => setPlaceTypeFilters({ ...placeTypeFilters, viewing_platform: e.target.checked })}
                                    />
                                    <p>Смотровая площадка</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('popularity')}>
                            <h3>Популярность и рекомендация</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.popularity ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.popularity && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={popularityFilters.popular}
                                        onChange={(e) => setPopularityFilters({ ...popularityFilters, popular: e.target.checked })}
                                    />
                                    <p>Популярные</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={popularityFilters.recommended}
                                        onChange={(e) => setPopularityFilters({ ...popularityFilters, recommended: e.target.checked })}
                                    />
                                    <p>Рекомендованные</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={popularityFilters.new_places}
                                        onChange={(e) => setPopularityFilters({ ...popularityFilters, new_places: e.target.checked })}
                                    />
                                    <p>Новые места</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('seasonality')}>
                            <h3>Сезонность</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.seasonality ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.seasonality && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={seasonalityFilters.year_round}
                                        onChange={(e) => setSeasonalityFilters({ ...seasonalityFilters, year_round: e.target.checked })}
                                    />
                                    <p>Круглый год</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={seasonalityFilters.seasonal}
                                        onChange={(e) => setSeasonalityFilters({ ...seasonalityFilters, seasonal: e.target.checked })}
                                    />
                                    <p>Сезонно</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='block-city'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="1" viewBox="0 0 302 1" fill="none">
                            <path d="M0.00192219 0.499979L302.002 0.50055" stroke="#8F8F8F" />
                        </svg>
                        <div className='duration-title' onClick={() => toggleSection('suitability')}>
                            <h3>Подходит для</h3>
                            <svg width="8" height="5" className={`arrow ${collapsedSections.suitability ? 'rotated' : ''}`}>
                                <path d="M7.06 4.94L8 4L4 0L0 4L0.94 4.94L4 1.88L7.06 4.94Z" fill="#111" />
                            </svg>
                        </div>
                        {!collapsedSections.suitability && (
                            <div className='cities'>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={suitabilityFilters.beginners}
                                        onChange={(e) => setSuitabilityFilters({ ...suitabilityFilters, beginners: e.target.checked })}
                                    />
                                    <p>Новичков</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={suitabilityFilters.no_special_prep}
                                        onChange={(e) => setSuitabilityFilters({ ...suitabilityFilters, no_special_prep: e.target.checked })}
                                    />
                                    <p>Без специальной подготовки</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={suitabilityFilters.with_children_under3}
                                        onChange={(e) => setSuitabilityFilters({ ...suitabilityFilters, with_children_under3: e.target.checked })}
                                    />
                                    <p>С детьми (до 3 лет)</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={suitabilityFilters.with_children_4to6}
                                        onChange={(e) => setSuitabilityFilters({ ...suitabilityFilters, with_children_4to6: e.target.checked })}
                                    />
                                    <p>С детьми (от 4 до 6 лет)</p>
                                </div>
                                <div className='city'>
                                    <input
                                        type="checkbox"
                                        checked={suitabilityFilters.with_children_under12}
                                        onChange={(e) => setSuitabilityFilters({ ...suitabilityFilters, with_children_under12: e.target.checked })}
                                    />
                                    <p>С детьми (до 12 лет)</p>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;
