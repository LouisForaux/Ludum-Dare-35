var CollisionCube:boolean;
var CollisionPetitBloc:boolean;
function OnCollisionStay(collision : Collision) {
    for (var contact : ContactPoint in collision.contacts) {
        if(contact.otherCollider.gameObject.tag=="Cube"){
            CollisionCube=true;
        }
        if(contact.otherCollider.gameObject.tag!="Cube"){
            CollisionPetitBloc=true;
        }
    }
}