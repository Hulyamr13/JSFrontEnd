import { expect } from 'chai';
import artGallery from './artGallery.js'; // Adjust the path if needed

describe("Art Gallery Tests", function() {

    describe("addArtwork", function() {
        it("should throw 'Invalid Information!' for non-string title or artist", function() {
            expect(() => artGallery.addArtwork(50, '30 x 40', 'Van Gogh')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork('Sunflower', '30 x 40', 5)).to.throw('Invalid Information!');
        });

        it("should throw 'Invalid Dimensions!' for invalid dimensions format", function() {
            expect(() => artGallery.addArtwork('Sunflower', '30 d 40', 'Van Gogh')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Sunflower', 5, 'Van Gogh')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Sunflower', '30 x40', 'Van Gogh')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Sunflower', '30x 40', 'Van Gogh')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Sunflower', '-30 x 40', 'Van Gogh')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('Sunflower', '30 x -40', 'Van Gogh')).to.throw('Invalid Dimensions!');
        });

        it("should throw 'This artist is not allowed in the gallery!' for invalid artist", function() {
            expect(() => artGallery.addArtwork('Sunflower', '30 x 40', 'Gan Vogh')).to.throw('This artist is not allowed in the gallery!');
        });

        it("should add artwork successfully for valid input", function() {
            expect(artGallery.addArtwork('Sunflower', '30 x 40', 'Van Gogh')).to.equal("Artwork added successfully: 'Sunflower' by Van Gogh with dimensions 30 x 40.");
        });
    });

    describe("calculateCosts", function() {
        it("should throw 'Invalid Information!' for invalid parameters", function() {
            expect(() => artGallery.calculateCosts(5, 5, 5)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts("5", 5, true)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(5, "5", true)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(5, -5, true)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(-5, 5, true)).to.throw('Invalid Information!');
        });

        it("should calculate costs with 10% discount for sponsor", function() {
            expect(artGallery.calculateCosts(5, 5, true)).to.equal("Exhibition and insurance costs are 9$, reduced by 10% with the help of a donation from your sponsor.");
        });

        it("should calculate costs without discount for no sponsor", function() {
            expect(artGallery.calculateCosts(5, 5, false)).to.equal("Exhibition and insurance costs are 10$.");
        });
    });

    describe("organizeExhibits", function() {
        it("should throw 'Invalid Information!' for invalid parameters", function() {
            expect(() => artGallery.organizeExhibits('5', '5')).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(5, '5')).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits('5', 5)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(-5, 5)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(5, -1)).to.throw('Invalid Information!');
        });

        it("should return message for fewer artworks per space", function() {
            expect(artGallery.organizeExhibits(5, 50)).to.equal("There are only 0 artworks in each display space, you can add more artworks.");
            expect(artGallery.organizeExhibits(5, 9)).to.equal("There are only 0 artworks in each display space, you can add more artworks.");
        });

        it("should return message for sufficient artworks per space", function() {
            expect(artGallery.organizeExhibits(50, 5)).to.equal("You have 5 display spaces with 10 artworks in each space.");
            expect(artGallery.organizeExhibits(25, 5)).to.equal("You have 5 display spaces with 5 artworks in each space.");
        });
    });
});
