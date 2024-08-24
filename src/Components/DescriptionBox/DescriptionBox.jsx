import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website for clothing is an online platform where
          customers can browse, select, and purchase apparel and accessories.
          These websites are designed to offer a seamless shopping experience,
          featuring categories such as men's, women’s, and children’s clothing,
          with subcategories for items like shirts, pants, dresses, and
          outerwear. Customers can view product details, including sizes,
          colors, materials, and pricing, often accompanied by high-quality
          images and customer reviews. Advanced search and filtering options
          allow users to quickly find specific items, while secure payment
          gateways ensure safe transactions. These websites often include
          features like wish lists, personalized recommendations, and customer
          accounts for easy order tracking and returns. Additionally, they may
          offer promotions, discounts, and loyalty programs to enhance customer
          engagement. Responsive design is crucial, ensuring the website is
          accessible on all devices, from desktops to mobile phones, providing a
          consistent and user-friendly experience.
        </p>
        <p>
          An e-commerce clothing website also integrates with social media for
          easy sharing, and it often includes a blog or style guide to inspire
          customers. Features like live chat support, virtual try-ons, and size
          guides enhance the shopping experience, making it more personalized
          and interactive. Sustainability information and ethical sourcing are
          increasingly highlighted to attract eco-conscious consumers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
