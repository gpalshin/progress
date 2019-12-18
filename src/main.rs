use exonum::helpers::fabric::NodeBuilder;
use exonum_configuration as configuration;

fn main() {
    exonum::crypto::init();
    exonum::helpers::init_logger().unwrap();

    let node = NodeBuilder::new()
        .with_service(Box::new(configuration::ServiceFactory))
        .with_service(Box::new(progress::ServiceFactory));
    node.run();
}
