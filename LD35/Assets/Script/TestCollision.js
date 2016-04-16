var Blablabla:boolean;
function OnCollisionStay(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
        Blablabla=true;
    }
}