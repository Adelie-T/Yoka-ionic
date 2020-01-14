import { ProductInterface } from './product-interface';

export class Product implements ProductInterface {

    // on code ici ceux qu'on veut récupérer : 
    public nova_groups: number;
    public code: string;
    public product_name: string;
    // public image_ingredients_thumb_url : string; 
    
    //on lui demande parmi l'objet JSON 'Product' de récuperer des attributs : 
    public deserialize(product : any) : Product {
        Object.assign(this, product.product); 
        //à l'intérieur du paramètre "product" qui représente du JSON, on cherche ce qui suit le mot 'product'
        return this;
    }
    
}
