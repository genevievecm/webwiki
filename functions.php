<?php 
/**
 * Enqueue scripts and styles.
 
function webwiki_scripts() {
	wp_enqueue_script( 'app', get_template_directory_uri() . '/public/bundle.js', array(), '0.0.1', true );
}
add_action( 'wp_enqueue_scripts', 'webwiki_scripts' );
*/


/**
 * Adding category field to WP API Posts Response
 */
function get_category_id_and_title() {
    register_rest_field( 'post',
        'categories',
        array(
            'get_callback'    => 'get_post_id_and_category',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
add_action( 'rest_api_init', 'get_category_id_and_title' );

/**
 * Callback function:
 * get category information for each post object
 */
function get_post_id_and_category($object, $field_name, $request){
    $cats = array();
    foreach (get_the_category($object->id) as $c) {
        $obj = array(
            'id' => $c->cat_ID,
            'name' => $c->name
        );
        array_push($cats, $obj);
    }
    return $cats;
}