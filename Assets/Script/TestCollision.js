var coli:boolean;
function OnCollisionStay(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
        if(contact.otherCollider.name!=""){
        coli=true;
    }
    }
}