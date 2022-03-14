<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ghost' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!u9HB}wmytq0Nkw@=E]zLvZe[wJ}cxz{&v,vsAo9Iuk{8zs%%Cj`5oi.vvZX>moN' );
define( 'SECURE_AUTH_KEY',  't=):CPW>m^a,xXMYc>DDIm1PZ9FxSTA9FLQFZDEPJ^>_d5`&8V`;#jehepB?W4o;' );
define( 'LOGGED_IN_KEY',    'kiy87%/|9Yb!rTukW;ZA~1wu(+vUP&86FkX-AUGjz3Gr|F5$^Nl,)#?Ng@QZD(`7' );
define( 'NONCE_KEY',        'l3F8*X;LA;kg42XEKXUd*Ks8VVN8H)9yWOudk j#YCreS&BkH%m~1STVv.I$Ha97' );
define( 'AUTH_SALT',        'Q/2Kz274BUuGjmke4t7AXf$Ef=8`&_ZLfaB9AJ&>^nK#7d7>]OKZkE {b93q7W?W' );
define( 'SECURE_AUTH_SALT', 'p8}AhoH5gNL[R)0>a^GoW7C=jj?k8s8f4fl9ud/|$}tEo|OW3X:`6tpBFGHVLzMi' );
define( 'LOGGED_IN_SALT',   '!FM6|0W`[M$]At+_3Ef3{A2GEGm7Vi<$&?}#~5h+f{#}_k5TZWXf9:U20E^BAm%N' );
define( 'NONCE_SALT',       'h<,1IfXuMHYy=6}~DISXF iVFkzNIsNyW&+7hZ*LqflkNwi@>m>ic^cws,>#[2o6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'gs_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
