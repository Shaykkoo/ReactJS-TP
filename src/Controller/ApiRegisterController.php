<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Form\RegistrationFormType;
use App\Security\AppAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ApiRegisterController extends AbstractController
{
    #[Route('/api/register', name: 'app_api_register', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, EntityManagerInterface $entityManager)
    {
        $user = new User();
        
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['username'])) {
            return new JsonResponse(['error' => 'username est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        if (!isset($data['password'])) {
            return new JsonResponse(['error' => 'password est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        if (!isset($data['nom'])) {
            return new JsonResponse(['error' => 'nom est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        if (!isset($data['prenom'])) {
            return new JsonResponse(['error' => 'prenom est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        if (!isset($data['telephone'])) {
            return new JsonResponse(['error' => 'telephone est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        if (!isset($data['adresse'])) {
            return new JsonResponse(['error' => 'adresse est requis'], JsonResponse::HTTP_BAD_REQUEST);
        }
        $hashedpass = $userPasswordHasher->hashPassword($user, $data['password']);
        $user->setEmail($data['username']);
        $user->setPassword($hashedpass);
        $user->setAdresse($data['adresse']);
        $user->setNom($data['nom']);
        $user->setPrenom($data['prenom']);
        $user->setTelephone($data['telephone']);
        $user->setRoles(["USER"]);

        $entityManager->persist($user);
        $entityManager->flush();

        // Réponse avec les données traitées
        return new JsonResponse(['message' => 'Inscription réussite']);
    
    }
}
