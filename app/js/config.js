/**
 * Created by i.sungurov on 02.10.13.
 */

operatorShell.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider.when(
        '/',
        {
            redirectTo: "/main"
        }
    );

    $routeProvider.when(
        '/login',
        {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }
    );

    $routeProvider.when(
        '/logout',
        {
            templateUrl: 'partials/logout.html',
            controller: 'LogoutCtrl'
        }
    );

    $routeProvider.when(
        '/settings',
        {
            templateUrl: 'partials/settings.html',
            controller: 'SettingsCtrl'
        }
    );


    $routeProvider.when(
        '/main',
        {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }
    );

    $routeProvider.when(
        '/processing',
        {
            templateUrl: 'partials/processing.html',
            controller: 'ProcessingCtrl'
        }
    );

    $routeProvider.when(
        '/personalQueue',
        {
            templateUrl: 'partials/personalQueue.html',
            controller: 'PersonalQueueCtrl'
        }
    );

    $routeProvider.when(
        '/redirect',
        {
            templateUrl: 'partials/redirect.html',
            controller: 'RedirectCtrl'
        }
    );
    $routeProvider.otherwise(
        {
            redirectTo: "/main"
        }
    );

}])

    .constant('LOGIN_URL', 'http://enter.local/auth/login')                                  /* Авторизоваться */
    .constant('LOGOUT_URL', 'http://enter.local/auth/logout')                                /* Выйти из системы */
    .constant('SEND_ID_URL', 'http://enter.local/client/sendid')                             /* Устанавливаем идетификатор клиента */

    .constant('INVITE_NEW_URL', 'http://enter.local/visitors/invite')                       /* Пригласить из общей очереди */
    .constant('INVITE_AGAIN_URL', 'http://enter.local/visitors/inviteagain')                /* Повторно пригласить из общей очереди */
    .constant('HOLD_URL', 'http://enter.local/visitors/hold')                               /* Отложить прием */
    .constant('INVITE_HOLDED_URL', 'http://enter.local/visitors/inviteholded')              /* Пригласить из персональной очереди */
    .constant('START_OPERATION_URL', 'http://enter.local/visitors/startoperation')          /* Начать прием */
    .constant('COMPLETE_OPERATION_URL', 'http://enter.local/visitors/completeoperation')    /* Закончить приём */
    .constant('CANCEL_OPERATION_URL', 'http://enter.local/visitors/canceloperation')        /* Не явился */
    .constant('REDIRECT_TICKET_URL', 'http://enter.local/visitors/redirect')                /* Перенаправить */

    .constant('ACTIVE_TICKET_PRODUCT_COUNT_URL', 'http://enter.local/tickets/count')        /* Количество в общей очереди  */
    .constant('PERSONAL_QUEUE_URL', 'http://enter.local/tickets/holded')                    /* Персоональная очередь */
    .constant('WORK_PLACE_CLIENT_URL', 'http://enter.local/clients/workplace')              /* Рабочее место*/
    .constant('MENU_URL', 'http://enter.local/subscribtion/menu')                           /* Рабочее место*/

    .constant('CATEGORIES_URL', 'http://enter.local/categories')                            /* Категории */
    .constant('PRODUCTS_URL', 'http://enter.local/products');                               /* Услуги */

