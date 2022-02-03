
export var APIURL = {
    URL : "localhost:8000/"
}



export var GET_METHOD = {

    GET_COUNTRY_LIST : 'api/admin/get_country_list'
}



export var POST_METHOD = {

    GET_SETTING_DETAIL : 'api/admin/get_setting_detail',
    ADMIN_OTP_VERIFICATION : 'api/admin/otp_verification',
    FORGOT_PASSWORD : 'api/admin/forgot_password',
    CHECK_DETAIL : 'api/admin/check_detail',
    NEW_PASSWORD : 'api/admin/new_password',
    CHECK_REFERRAL: 'api/admin/check_referral',
    GET_CITY_LIST: 'api/admin/get_city_list',
    GET_DELIVERY_LIST_FOR_CITY: 'api/admin/get_delivery_list_for_city',
    GET_DOCUMENT_LIST : 'api/admin/get_document_list',
    UPLOAD_DOCUMENT : 'api/admin/upload_document',
    OTP_VERIFICATION : 'api/user/otp_verification',
    GET_DETAIL: 'api/user/get_detail',
    SEND_EMAIL: 'api/send_email',
    SEND_HOPPER_EMAIL: 'api/send_hopper_email',
    SEND_PARTNER_EMAIL: 'api/send_partner_email',
    USER_UPDATE_ORDER: "api/user/user_update_order",

    CHANGE_DELIVERY_ADDRESS: 'api/user/change_delivery_address',
    CHECK_DELIVERY_AVAILABLE: 'api/user/check_delivery_available',
    CHECK_CITY_RADIUS: 'api/user/check_city_radius',
    REMOVE_FAVOURITE_STORE: 'api/user/remove_favourite_store',
    ADD_FAVOURITE_STORE: 'api/user/add_favourite_store',
    GET_FAVOURITE_STORE_LIST: 'api/user/get_favourite_store_list',

    ADD_FAVOURITE_ADDRESS: 'api/user/add_favourite_address',
    DELETE_FAVOURITE_ADDRESS: 'api/user/delete_favourite_address',
    GET_FAVOUTIRE_ADDRESSES: 'api/user/get_favourite_addresses',

    GET_DELIVERY_LIST_FOR_NEAREST_CITY : "api/user/get_delivery_list_for_nearest_city",
    GET_DELIVERY_LIST:"api/admin/get_delivery_list",
    GET_STORE_LIST_NEAREST_CITY: "api/user/get_store_list_nearest_city",
    GET_STORE_LIST : "api/user/get_store_list",
    USER_GET_STORE_PRODUCT_ITEM_LIST : "api/user/user_get_store_product_item_list",
    ADD_ITEM_IN_CART: "api/user/add_item_in_cart",
    GET_CART: "api/user/get_cart",
    CLEAR_CART: "api/user/clear_cart",
    GET_ORDER_CART_INVOICE: "api/user/get_order_cart_invoice",
    GET_COURIER_ORDER_INVOICE: "api/user/get_courier_order_invoice",
    APPLY_PROMO_CODE: "api/user/apply_promo_code",
    GET_PAYMENT_GATEWAY: "api/user/get_payment_gateway",
    ORDER_HISTORY_DETAIL: "api/user/order_history_detail",
    GET_INVOICE: "api/user/get_invoice",
    SHOW_INVOICE: "api/user/show_invoice",
    GET_PROVIDER_LOCATION: "api/user/get_provider_location",
    RATING_TO_PROVIDER: "api/user/rating_to_provider",
    RATING_TO_STORE: "api/user/rating_to_store",

    GET_ORDER_DETAIL: "api/user/get_order_detail",
    GET_CARD_LIST: "api/user/get_card_list",
    ADD_CARD: "api/user/add_card",
    DELETE_CARD: "api/user/delete_card",
    SELECT_CARD: "api/user/select_card",
    CHANGE_USER_WALLET_STATUS: "api/user/change_user_wallet_status",
    ADD_WALLET_AMOUNT: "api/user/add_wallet_amount",
    PAY_ORDER_PAYMENT: "api/user/pay_order_payment",

    CREATE_ORDER: "api/user/create_order",
    GET_ORDERS: "api/user/get_orders",
    ORDER_HISTORY: "api/user/order_history",
    LOGIN : 'api/user/login',
    LOGOUT: 'api/user/logout',
    REGISTER : 'api/user/register',
    UPDATE : 'api/user/update',
    USER_CANCEL_ORDER: "api/user/user_cancel_order",
    GET_COUNTRY_CITY_LIST: 'api/user/country_city_list',

    GET_VEHICLES_LIST: 'api/store/get_vehicles_list'

}