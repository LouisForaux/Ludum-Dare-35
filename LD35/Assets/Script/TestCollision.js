var coli:boolean;
function OnCollisionStay(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
        coli=true;
    }
}