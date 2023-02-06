'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">city-bas-be documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-12b55ce6c24eaa538ffa6cb78738591963fefa919bec40b9c49b3d0ad390c7f089ebd643af9630d9677da704aeeb586ddf534864592eff2a6fe329f59e06c853"' : 'data-target="#xs-controllers-links-module-AppModule-12b55ce6c24eaa538ffa6cb78738591963fefa919bec40b9c49b3d0ad390c7f089ebd643af9630d9677da704aeeb586ddf534864592eff2a6fe329f59e06c853"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-12b55ce6c24eaa538ffa6cb78738591963fefa919bec40b9c49b3d0ad390c7f089ebd643af9630d9677da704aeeb586ddf534864592eff2a6fe329f59e06c853"' :
                                            'id="xs-controllers-links-module-AppModule-12b55ce6c24eaa538ffa6cb78738591963fefa919bec40b9c49b3d0ad390c7f089ebd643af9630d9677da704aeeb586ddf534864592eff2a6fe329f59e06c853"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-588a419175ae589babdfb35be79c81865f95fd7dd84633200fc7fe11a1eb15aea2b106338a6c17530ff422e9d8554c7869bf1f3916a6cd41840340b64e288a8a"' : 'data-target="#xs-injectables-links-module-AuthModule-588a419175ae589babdfb35be79c81865f95fd7dd84633200fc7fe11a1eb15aea2b106338a6c17530ff422e9d8554c7869bf1f3916a6cd41840340b64e288a8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-588a419175ae589babdfb35be79c81865f95fd7dd84633200fc7fe11a1eb15aea2b106338a6c17530ff422e9d8554c7869bf1f3916a6cd41840340b64e288a8a"' :
                                        'id="xs-injectables-links-module-AuthModule-588a419175ae589babdfb35be79c81865f95fd7dd84633200fc7fe11a1eb15aea2b106338a6c17530ff422e9d8554c7869bf1f3916a6cd41840340b64e288a8a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransitModule.html" data-type="entity-link" >TransitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' : 'data-target="#xs-controllers-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' :
                                            'id="xs-controllers-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' }>
                                            <li class="link">
                                                <a href="controllers/DBupdateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DBupdateController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LiveUpdatesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveUpdatesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TransitController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransitController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' : 'data-target="#xs-injectables-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' :
                                        'id="xs-injectables-links-module-TransitModule-7f1257e0e7bd6cd10bf6b6262770a52205ef65e32043e3559516be23667bbcf6a285ac93c74a0857d27f13dc03e67f2578a04ffbcdac48115f94a2c97e2b6302"' }>
                                        <li class="link">
                                            <a href="injectables/DBUpdateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DBUpdateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LineRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LineService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveDataRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveDataRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LiveUpdatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveUpdatesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OTPService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OTPService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PointService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PointService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RouteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RouteStopService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteStopService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ScheduleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StopService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TripRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TripService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TripUpdatesListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripUpdatesListener</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' : 'data-target="#xs-controllers-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' :
                                            'id="xs-controllers-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' }>
                                            <li class="link">
                                                <a href="controllers/BookingsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SavedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' : 'data-target="#xs-injectables-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' :
                                        'id="xs-injectables-links-module-UserModule-cd7ac515dde79f6a04ddd69c887bd6f576165055a3d60c8ba685c77dfce73245e9ba1cda876a4d52120c0dc12c52fa436e1aa7c39f762effc1f2b1f40ba8e28e"' }>
                                        <li class="link">
                                            <a href="injectables/BookingRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BookingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SavedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BookingsController.html" data-type="entity-link" >BookingsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DBupdateController.html" data-type="entity-link" >DBupdateController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LiveUpdatesController.html" data-type="entity-link" >LiveUpdatesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SavedController.html" data-type="entity-link" >SavedController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TransitController.html" data-type="entity-link" >TransitController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Booking.html" data-type="entity-link" >Booking</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Line.html" data-type="entity-link" >Line</a>
                                </li>
                                <li class="link">
                                    <a href="entities/LiveData.html" data-type="entity-link" >LiveData</a>
                                </li>
                                <li class="link">
                                    <a href="entities/NewSchedule.html" data-type="entity-link" >NewSchedule</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Point.html" data-type="entity-link" >Point</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Route.html" data-type="entity-link" >Route</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RouteStop.html" data-type="entity-link" >RouteStop</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Schedule.html" data-type="entity-link" >Schedule</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Stop.html" data-type="entity-link" >Stop</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Trip.html" data-type="entity-link" >Trip</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserRoute.html" data-type="entity-link" >UserRoute</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserStop.html" data-type="entity-link" >UserStop</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArrivalDto.html" data-type="entity-link" >ArrivalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Context.html" data-type="entity-link" >Context</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IGenericRepository.html" data-type="entity-link" >IGenericRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Itinerary.html" data-type="entity-link" >Itinerary</a>
                            </li>
                            <li class="link">
                                <a href="classes/Leg.html" data-type="entity-link" >Leg</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineDto.html" data-type="entity-link" >LineDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewScheduleService.html" data-type="entity-link" >NewScheduleService</a>
                            </li>
                            <li class="link">
                                <a href="classes/OTPParams.html" data-type="entity-link" >OTPParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/OTPStrategy.html" data-type="entity-link" >OTPStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plan.html" data-type="entity-link" >Plan</a>
                            </li>
                            <li class="link">
                                <a href="classes/PointDto.html" data-type="entity-link" >PointDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PointRepository.html" data-type="entity-link" >PointRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/PositionProto.html" data-type="entity-link" >PositionProto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteDto.html" data-type="entity-link" >RouteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteInfoDto.html" data-type="entity-link" >RouteInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteRepository.html" data-type="entity-link" >RouteRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteStopRepository.html" data-type="entity-link" >RouteStopRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScheduleDayDto.html" data-type="entity-link" >ScheduleDayDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScheduleDetailsDto.html" data-type="entity-link" >ScheduleDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScheduleDto.html" data-type="entity-link" >ScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScheduleRepository.html" data-type="entity-link" >ScheduleRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingleRouteStrategy.html" data-type="entity-link" >SingleRouteStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Step.html" data-type="entity-link" >Step</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopDto.html" data-type="entity-link" >StopDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopRepository.html" data-type="entity-link" >StopRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransitGateWay.html" data-type="entity-link" >TransitGateWay</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trip.html" data-type="entity-link" >Trip</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trip-1.html" data-type="entity-link" >Trip</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTrips.html" data-type="entity-link" >UpdateTrips</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vertex.html" data-type="entity-link" >Vertex</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookingRepository.html" data-type="entity-link" >BookingRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookingService.html" data-type="entity-link" >BookingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DBUpdateService.html" data-type="entity-link" >DBUpdateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineRepository.html" data-type="entity-link" >LineRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineService.html" data-type="entity-link" >LineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveDataRepository.html" data-type="entity-link" >LiveDataRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveUpdatesService.html" data-type="entity-link" >LiveUpdatesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OTPService.html" data-type="entity-link" >OTPService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PointService.html" data-type="entity-link" >PointService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteService.html" data-type="entity-link" >RouteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteStopService.html" data-type="entity-link" >RouteStopService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SavedService.html" data-type="entity-link" >SavedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScheduleService.html" data-type="entity-link" >ScheduleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StopService.html" data-type="entity-link" >StopService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripRepository.html" data-type="entity-link" >TripRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripService.html" data-type="entity-link" >TripService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripUpdatesListener.html" data-type="entity-link" >TripUpdatesListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FeedEntity.html" data-type="entity-link" >FeedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeedEntity-1.html" data-type="entity-link" >FeedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeedHeader.html" data-type="entity-link" >FeedHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeedHeader-1.html" data-type="entity-link" >FeedHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeedMessage.html" data-type="entity-link" >FeedMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeedMessage-1.html" data-type="entity-link" >FeedMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Long.html" data-type="entity-link" >Long</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigatorStrategy.html" data-type="entity-link" >NavigatorStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link" >Position</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StopTimeEvent.html" data-type="entity-link" >StopTimeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StopTimeUpdate.html" data-type="entity-link" >StopTimeUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TripDescriptor.html" data-type="entity-link" >TripDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TripDescriptor-1.html" data-type="entity-link" >TripDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TripState.html" data-type="entity-link" >TripState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TripUpdate.html" data-type="entity-link" >TripUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VehicleDescriptor.html" data-type="entity-link" >VehicleDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VehiclePosition.html" data-type="entity-link" >VehiclePosition</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});