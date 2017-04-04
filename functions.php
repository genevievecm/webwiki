<?php 
/**
 * Enqueue scripts and styles.
 
function webwiki_scripts() {
	wp_enqueue_script( 'app', get_template_directory_uri() . '/public/bundle.js', array(), '0.0.1', true );
}
add_action( 'wp_enqueue_scripts', 'webwiki_scripts' );
*/

/**
 * Callback function:
 * get categories and related posts
 */
function get_post_id_and_category(){

    $categories = array();

    $cats = get_terms( array(
        'taxonomy' => 'category',
        'hide_empty' => true,
        'orderby' => 'term_id',
    ) );

    foreach ($cats as $cat) {

        $args = array(
            'post_type' => 'post',
            'category' => $cat->term_id,
        );
        
        $posts_array = get_posts( $args );

        $cat_obj = array(
            'id' => $cat->term_id,
            'title' => $cat->name,
            'slug' => $cat->slug,
            'post_count' => $cat->count,
            'posts' => $posts_array,
        );

        array_push($categories, $cat_obj);
    }

    return $categories;
}


/**
 * Register Custom Endpoint
 */
function custom_categories_endpoint(){
    register_rest_route( 'custom', '/categories', array(
        'methods' => 'GET',
        'callback' => 'get_post_id_and_category',
    ));
}
add_action( 'rest_api_init', 'custom_categories_endpoint');
