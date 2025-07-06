'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="w-4 h-4 mt-1" />
            123 Market Street, Lagos, Nigeria
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <Mail className="w-4 h-4" />
            support@shopease.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-muted">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-muted">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-muted">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-6">
        &copy; {new Date().getFullYear()} ShopEase. Created by Loye Group.
      </div>
    </footer>
  );
};

export default Footer;
